'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, FileText, BarChart3 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Rating {
  judgeName: string
  track: string
  technical: number
  communication: number
  delivery: number
  timestamp: string
  id: string
}

export function ExportData() {
  const [isExporting, setIsExporting] = useState(false)

  const exportRatings = async () => {
    setIsExporting(true)

    try {
      const ratings: Rating[] = JSON.parse(localStorage.getItem('ratings') || '[]')

      if (ratings.length === 0) {
        alert('No ratings data to export.')
        return
      }

      // Calculate summary statistics
      const baRatings = ratings.filter(r => r.track === 'BA')
      const waiRatings = ratings.filter(r => r.track === 'WAI')

      const calculateAverage = (ratings: Rating[]) => {
        if (ratings.length === 0) return { technical: 0, communication: 0, delivery: 0, overall: 0 }

        const totals = ratings.reduce((acc, r) => ({
          technical: acc.technical + r.technical,
          communication: acc.communication + r.communication,
          delivery: acc.delivery + r.delivery
        }), { technical: 0, communication: 0, delivery: 0 })

        const technical = totals.technical / ratings.length
        const communication = totals.communication / ratings.length
        const delivery = totals.delivery / ratings.length
        const overall = (technical + communication + delivery) / 3

        return {
          technical: Math.round(technical * 100) / 100,
          communication: Math.round(communication * 100) / 100,
          delivery: Math.round(delivery * 100) / 100,
          overall: Math.round(overall * 100) / 100
        }
      }

      const exportData = {
        exportDate: new Date().toISOString(),
        totalRatings: ratings.length,
        summary: {
          BA: {
            count: baRatings.length,
            averages: calculateAverage(baRatings)
          },
          WAI: {
            count: waiRatings.length,
            averages: calculateAverage(waiRatings)
          }
        },
        detailedRatings: ratings.map(rating => ({
          ...rating,
          // Remove judge name for anonymity in export
          judgeName: `Judge ${rating.id.slice(-4)}`
        }))
      }

      // Create and download JSON file
      const blob = new Blob([JSON.stringify(exportData, null, 2)], {
        type: 'application/json'
      })
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `train-hire-demoday-results-${new Date().toISOString().split('T')[0]}.json`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)

      // Also create CSV for spreadsheet analysis
      const csvHeaders = ['Track', 'Technical', 'Communication', 'Delivery', 'Overall', 'Timestamp']
      const csvData = ratings.map(rating => [
        rating.track,
        rating.technical,
        rating.communication,
        rating.delivery,
        ((rating.technical + rating.communication + rating.delivery) / 3).toFixed(2),
        new Date(rating.timestamp).toLocaleString()
      ])

      const csvContent = [csvHeaders, ...csvData]
        .map(row => row.map(field => `"${field}"`).join(','))
        .join('\\n')

      const csvBlob = new Blob([csvContent], { type: 'text/csv' })
      const csvUrl = URL.createObjectURL(csvBlob)
      const csvLink = document.createElement('a')
      csvLink.href = csvUrl
      csvLink.download = `train-hire-demoday-results-${new Date().toISOString().split('T')[0]}.csv`
      document.body.appendChild(csvLink)
      csvLink.click()
      document.body.removeChild(csvLink)
      URL.revokeObjectURL(csvUrl)

    } catch (error) {
      console.error('Export failed:', error)
      alert('Export failed. Please try again.')
    } finally {
      setIsExporting(false)
    }
  }

  const exportPresentationData = () => {
    // Export the presentation content for backup
    try {
      const presentationData = {
        exportDate: new Date().toISOString(),
        version: '1.0',
        // Could include content.json data here if needed
        note: 'Presentation content is stored in data/content.json'
      }

      const blob = new Blob([JSON.stringify(presentationData, null, 2)], {
        type: 'application/json'
      })
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `train-hire-presentation-backup-${new Date().toISOString().split('T')[0]}.json`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Presentation export failed:', error)
      alert('Presentation export failed. Please try again.')
    }
  }

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <div className="flex flex-col space-y-3">
        <motion.button
          initial={{ opacity: 0, scale: 0, x: -20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 1.2, type: "spring" }}
          onClick={exportRatings}
          disabled={isExporting}
          className={cn(
            'w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 border border-white/20',
            isExporting
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-white/90 backdrop-blur-xl hover:bg-white hover:scale-110'
          )}
          whileHover={!isExporting ? { scale: 1.1 } : {}}
          whileTap={!isExporting ? { scale: 0.95 } : {}}
        >
          {isExporting ? (
            <motion.div
              className="w-6 h-6 border-2 border-cardy-blue border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          ) : (
            <BarChart3 className="w-6 h-6 text-cardy-ink" />
          )}
        </motion.button>

        <motion.button
          initial={{ opacity: 0, scale: 0, x: -20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 1.4, type: "spring" }}
          onClick={exportPresentationData}
          className="w-14 h-14 bg-white/90 backdrop-blur-xl rounded-full shadow-2xl flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 border border-white/20"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FileText className="w-6 h-6 text-cardy-ink" />
        </motion.button>
      </div>

      {/* Tooltip */}
      <div className="absolute -right-2 top-0 transform translate-x-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
          Export Data
        </div>
      </div>
    </div>
  )
}