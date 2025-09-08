'use client';

import { useState, useMemo } from 'react';
import { Search, Filter, SortAsc, SortDesc, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

interface Publication {
  id: number;
  title: string;
  titleBn: string;
  year: number;
  month: string;
  coverImage: string;
  description: string;
  descriptionBn: string;
}

interface PublicationsProps {
  language: 'en' | 'bn';
}

const Publications = ({ language }: PublicationsProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');

  // Mock publications data
  const publications: Publication[] = [
    {
      id: 1,
      title: "Spring Edition 1995",
      titleBn: "বসন্ত সংস্করণ ১৯৯৫",
      year: 1995,
      month: "March",
      coverImage: "/api/placeholder/300/400",
      description: "The inaugural edition featuring classic Bengali poetry and prose",
      descriptionBn: "ক্লাসিক বাংলা কবিতা এবং গদ্যের বৈশিষ্ট্যযুক্ত উদ্বোধনী সংস্করণ"
    },
    {
      id: 2,
      title: "Monsoon Collection 1996",
      titleBn: "বর্ষা সংগ্রহ ১৯৯৬",
      year: 1996,
      month: "July",
      coverImage: "/api/placeholder/300/400",
      description: "A collection of monsoon-themed literature and art",
      descriptionBn: "বর্ষা-থিমযুক্ত সাহিত্য এবং শিল্পের সংগ্রহ"
    },
    {
      id: 3,
      title: "Winter Special 1997",
      titleBn: "শীতকালীন বিশেষ ১৯৯৭",
      year: 1997,
      month: "December",
      coverImage: "/api/placeholder/300/400",
      description: "Special winter edition with contemporary Bengali writers",
      descriptionBn: "সমকালীন বাংলা লেখকদের সাথে বিশেষ শীতকালীন সংস্করণ"
    },
    {
      id: 4,
      title: "Poetry Festival 2024",
      titleBn: "কবিতা উৎসব ২০২৪",
      year: 2024,
      month: "January",
      coverImage: "/api/placeholder/300/400",
      description: "Modern Bengali poetry and contemporary expressions",
      descriptionBn: "আধুনিক বাংলা কবিতা এবং সমকালীন প্রকাশ"
    },
    {
      id: 5,
      title: "Cultural Heritage 2024",
      titleBn: "সাংস্কৃতিক ঐতিহ্য ২০২৪",
      year: 2024,
      month: "June",
      coverImage: "/api/placeholder/300/400",
      description: "Celebrating Bengali cultural heritage and traditions",
      descriptionBn: "বাংলা সাংস্কৃতিক ঐতিহ্য এবং ঐতিহ্য উদযাপন"
    },
    {
      id: 6,
      title: "Literary Excellence 2025",
      titleBn: "সাহিত্যিক উৎকর্ষতা ২০২৫",
      year: 2025,
      month: "January",
      coverImage: "/api/placeholder/300/400",
      description: "Showcasing the best of contemporary Bengali literature",
      descriptionBn: "সমকালীন বাংলা সাহিত্যের সেরা প্রদর্শন"
    }
  ];

  const yearOptions = [
    { value: 'all', label: { en: 'All Years', bn: 'সব বছর' } },
    { value: '1995-2011', label: { en: '1995-2011', bn: '১৯৯৫-২০১১' } },
    { value: '2024-2025', label: { en: '2024-2025', bn: '২০২৪-২০২৫' } }
  ];

  const filteredAndSortedPublications = useMemo(() => {
    let filtered = publications;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(pub => 
        pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.titleBn.includes(searchTerm) ||
        pub.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.descriptionBn.includes(searchTerm)
      );
    }

    // Filter by year range
    if (selectedYear !== 'all') {
      if (selectedYear === '1995-2011') {
        filtered = filtered.filter(pub => pub.year >= 1995 && pub.year <= 2011);
      } else if (selectedYear === '2024-2025') {
        filtered = filtered.filter(pub => pub.year >= 2024 && pub.year <= 2025);
      }
    }

    // Sort publications
    filtered.sort((a, b) => {
      if (sortOrder === 'newest') {
        return b.year - a.year || b.id - a.id;
      } else {
        return a.year - b.year || a.id - b.id;
      }
    });

    return filtered;
  }, [searchTerm, selectedYear, sortOrder]);

  const content = {
    en: {
      title: "Publications",
      subtitle: "Explore our collection of literary works",
      searchPlaceholder: "Search publications...",
      noResults: "No publications found"
    },
    bn: {
      title: "প্রকাশনা",
      subtitle: "আমাদের সাহিত্যিক রচনার সংগ্রহ অন্বেষণ করুন",
      searchPlaceholder: "প্রকাশনা অনুসন্ধান করুন...",
      noResults: "কোন প্রকাশনা পাওয়া যায়নি"
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#FDF5E6] to-[#F5F5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl md:text-5xl font-bold text-[#2F1B14] mb-4 ${language === 'bn' ? 'bengali' : ''}`}>
            {content[language].title}
          </h2>
          <p className={`text-xl text-[#A0522D] ${language === 'bn' ? 'bengali' : ''}`}>
            {content[language].subtitle}
          </p>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between md:space-x-4"
        >
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#A0522D] w-5 h-5" />
            <input
              type="text"
              placeholder={content[language].searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-[#DAA520]/30 rounded-lg bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#DAA520] focus:border-transparent"
            />
          </div>

          {/* Year Filter */}
          <div className="flex items-center space-x-2">
            <Calendar className="text-[#A0522D] w-5 h-5" />
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-4 py-3 border border-[#DAA520]/30 rounded-lg bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#DAA520] focus:border-transparent"
            >
              {yearOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label[language]}
                </option>
              ))}
            </select>
          </div>

          {/* Sort Order */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setSortOrder(sortOrder === 'newest' ? 'oldest' : 'newest')}
              className="flex items-center space-x-2 px-4 py-3 bg-[#DAA520] text-white rounded-lg hover:bg-[#B8860B] transition-colors duration-200"
            >
              {sortOrder === 'newest' ? <SortDesc className="w-4 h-4" /> : <SortAsc className="w-4 h-4" />}
              <span className="text-sm font-medium">
                {sortOrder === 'newest' ? (language === 'en' ? 'Newest' : 'নতুনতম') : (language === 'en' ? 'Oldest' : 'পুরাতনতম')}
              </span>
            </button>
          </div>
        </motion.div>

        {/* Publications Grid */}
        {filteredAndSortedPublications.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredAndSortedPublications.map((publication, index) => (
              <motion.div
                key={publication.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Cover Image */}
                <div className="relative h-64 bg-gradient-to-br from-[#8B4513] to-[#D2691E] overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-4xl font-bold mb-2">📖</div>
                      <p className="text-sm opacity-80">{publication.month} {publication.year}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-[#A0522D] font-medium">
                      {publication.month} {publication.year}
                    </span>
                    <span className="text-xs bg-[#DAA520]/20 text-[#8B4513] px-2 py-1 rounded-full">
                      #{publication.id}
                    </span>
                  </div>
                  
                  <h3 className={`text-xl font-bold text-[#2F1B14] mb-3 ${language === 'bn' ? 'bengali' : ''}`}>
                    {language === 'en' ? publication.title : publication.titleBn}
                  </h3>
                  
                  <p className={`text-[#2F1B14]/70 text-sm leading-relaxed ${language === 'bn' ? 'bengali' : ''}`}>
                    {language === 'en' ? publication.description : publication.descriptionBn}
                  </p>
                  
                  <button className="mt-4 w-full py-2 bg-gradient-to-r from-[#8B4513] to-[#D2691E] text-white rounded-lg hover:from-[#A0522D] hover:to-[#D2691E] transition-all duration-300 transform hover:scale-105">
                    {language === 'en' ? 'View Details' : 'বিস্তারিত দেখুন'}
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">📚</div>
            <p className={`text-xl text-[#A0522D] ${language === 'bn' ? 'bengali' : ''}`}>
              {content[language].noResults}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Publications;
