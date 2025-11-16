import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HiCode, 
  HiEye, 
  HiStar, 
  HiClock, 
  HiTrendingUp, 
  HiChartBar,
  HiTerminal,
  HiPlay,
  HiPause,
  HiRefresh
} from 'react-icons/hi';

const InteractiveDashboard = ({ projects = [] }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isTerminalActive, setIsTerminalActive] = useState(false);
  const [terminalText, setTerminalText] = useState('');

  // Sample projects if none provided
  const defaultProjects = [
    {
      id: 1,
      title: "AI Traffic Detection",
      category: "AI/ML",
      status: "Completed",
      progress: 100,
      technologies: ["Python", "OpenCV", "Flask", "ReactJS"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop&crop=entropy&auto=format&q=80",
      description: "Advanced traffic violation detection system using computer vision",
      metrics: { views: 1250, stars: 89, commits: 156 },
      codeSnippet: `# AI Traffic Detection System
import cv2
import numpy as np
from flask import Flask, jsonify

app = Flask(__name__)

def detect_violations(frame):
    # Process frame for violations
    return violations

@app.route('/api/detect')
def detect():
    return jsonify({"status": "active"})`
    },
    {
      id: 2,
      title: "Meditrack System",
      category: "Healthcare",
      status: "Completed",
      progress: 100,
      technologies: ["React", "MongoDB", "Node.js", "NLP"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop&crop=entropy&auto=format&q=80",
      description: "Medical inventory management with AI predictions",
      metrics: { views: 890, stars: 67, commits: 203 },
      codeSnippet: `// Medical Inventory API
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/api/inventory', async (req, res) => {
  const items = await Inventory.find();
  res.json(items);
});

app.listen(3000);`
    },
    {
      id: 3,
      title: "QuestionCloud AI",
      category: "Education",
      status: "Completed",
      progress: 100,
      technologies: ["Python", "AI", "ReactJS", "MongoDB"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop&crop=entropy&auto=format&q=80",
      description: "AI-powered educational platform with content generation",
      metrics: { views: 2100, stars: 134, commits: 287 },
      codeSnippet: `# AI Question Generator
import openai
from flask import Flask, request

def generate_questions(content):
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=f"Generate questions: {content}",
        max_tokens=150
    )
    return response.choices[0].text`
    },
    {
      id: 4,
      title: "FabFlow Management",
      category: "Enterprise",
      status: "Completed",
      progress: 100,
      technologies: ["ReactJS", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop&crop=entropy&auto=format&q=80",
      description: "Steel fabrication management system",
      metrics: { views: 756, stars: 45, commits: 178 },
      codeSnippet: `// Fabrication Management
import React, { useState } from 'react';

const FabFlow = () => {
  const [orders, setOrders] = useState([]);
  
  const addOrder = (order) => {
    setOrders([...orders, order]);
  };
  
  return <OrderDashboard />;
};`
    }
  ];

  const displayProjects = projects.length > 0 ? projects.slice(0, 6) : defaultProjects;

  // Calculate stats - optimized for faster rendering
  const stats = useMemo(() => {
    const totalProjects = displayProjects.length;
    const completedProjects = displayProjects.filter(p => p.status === 'Completed').length;
    
    // Optimized technology extraction with Set for faster processing
    const techSet = new Set();
    displayProjects.forEach(p => {
      if (p.technologies) {
        p.technologies.forEach(tech => techSet.add(tech));
      }
    });
    
    const avgRating = totalProjects > 0 ? 
      Math.round(displayProjects.reduce((acc, p) => acc + (p.metrics?.stars || 0), 0) / totalProjects) : 0;

    return {
      totalProjects,
      completedProjects,
      totalTechnologies: techSet.size,
      avgRating
    };
  }, [displayProjects.length]);

  // Terminal animation
  useEffect(() => {
    if (isTerminalActive && selectedProject) {
      const code = selectedProject.codeSnippet || '// No code available';
      let i = 0;
      setTerminalText('');
      
      const typeWriter = () => {
        if (i < code.length) {
          setTerminalText(code.substring(0, i + 1));
          i++;
          setTimeout(typeWriter, 50);
        }
      };
      
      typeWriter();
    }
  }, [isTerminalActive, selectedProject]);

  const StatWidget = ({ icon: Icon, title, value, color, delay }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">{title}</p>
          <motion.p 
            className="text-3xl font-bold text-gray-900 dark:text-white mt-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: delay + 0.2 }}
          >
            {value}
          </motion.p>
        </div>
        <div className={`p-3 rounded-xl ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </motion.div>
  );

  const ProjectWidget = ({ project, index }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 cursor-pointer"
      onClick={() => setSelectedProject(project)}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      {/* Project Image */}
      <div className="relative h-40 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
            project.status === 'Completed' 
              ? 'bg-green-500 text-white' 
              : 'bg-yellow-500 text-black'
          }`}>
            {project.status}
          </span>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-4">
        <h3 className="font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-1 mb-3">
          {project.technologies?.slice(0, 3).map((tech, i) => (
            <span 
              key={i}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
            >
              {tech}
            </span>
          ))}
          {project.technologies?.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Metrics */}
        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center space-x-3">
            <span className="flex items-center space-x-1">
              <HiEye className="w-4 h-4" />
              <span>{project.metrics?.views || 0}</span>
            </span>
            <span className="flex items-center space-x-1">
              <HiStar className="w-4 h-4" />
              <span>{project.metrics?.stars || 0}</span>
            </span>
          </div>
          <span className="text-xs">{project.category}</span>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Dashboard Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-4"
      >
        <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full border border-blue-200 dark:border-blue-700 mb-3">
          <span className="text-sm font-medium text-blue-700 dark:text-blue-300">📊 Developer Dashboard</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Live Project Metrics
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Interactive showcase with real-time stats and code previews
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatWidget
          icon={HiCode}
          title="Total Projects"
          value={stats.totalProjects}
          color="bg-gradient-to-r from-blue-500 to-blue-600"
          delay={0}
        />
        <StatWidget
          icon={HiChartBar}
          title="Completed"
          value={stats.completedProjects}
          color="bg-gradient-to-r from-green-500 to-green-600"
          delay={0.1}
        />
        <StatWidget
          icon={HiTrendingUp}
          title="Technologies"
          value={stats.totalTechnologies}
          color="bg-gradient-to-r from-purple-500 to-purple-600"
          delay={0.2}
        />
        <StatWidget
          icon={HiStar}
          title="Avg Stars"
          value={stats.avgRating}
          color="bg-gradient-to-r from-yellow-500 to-yellow-600"
          delay={0.3}
        />
      </div>

      {/* Main Dashboard Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Projects Grid */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Live Projects</h3>
            <motion.button
              onClick={() => window.location.reload()}
              className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <HiRefresh className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </motion.button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {displayProjects.map((project, index) => (
              <ProjectWidget key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Terminal & Details Panel */}
        <div className="space-y-6">
          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Project Details
            </h3>
            
            {selectedProject ? (
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {selectedProject.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    {selectedProject.description}
                  </p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Technologies:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies?.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {selectedProject.metrics?.views || 0}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Views</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {selectedProject.metrics?.stars || 0}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Stars</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {selectedProject.metrics?.commits || 0}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Commits</p>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-gray-500 dark:text-gray-400 text-center py-8">
                Click on a project to view details
              </p>
            )}
          </motion.div>

          {/* Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-700"
          >
            <div className="flex items-center justify-between p-4 bg-gray-800 border-b border-gray-700">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex items-center space-x-2">
                <HiTerminal className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400 text-sm">Terminal</span>
              </div>
              <button
                onClick={() => setIsTerminalActive(!isTerminalActive)}
                className="p-1 hover:bg-gray-700 rounded"
              >
                {isTerminalActive ? (
                  <HiPause className="w-4 h-4 text-gray-400" />
                ) : (
                  <HiPlay className="w-4 h-4 text-gray-400" />
                )}
              </button>
            </div>
            
            <div className="p-4 h-64 overflow-y-auto">
              <div className="text-green-400 text-sm font-mono">
                <div className="mb-2">
                  <span className="text-blue-400">ahammed@portfolio</span>
                  <span className="text-white">:</span>
                  <span className="text-yellow-400">~/projects</span>
                  <span className="text-white">$ </span>
                  <span className="text-green-400">cat {selectedProject?.title?.toLowerCase().replace(/\s+/g, '_') || 'project'}.js</span>
                </div>
                <pre className="whitespace-pre-wrap text-gray-300 leading-relaxed">
                  {terminalText || (selectedProject ? 'Click play to view code...' : 'Select a project to view code')}
                </pre>
                {isTerminalActive && (
                  <span className="inline-block w-2 h-4 bg-green-400 animate-pulse ml-1"></span>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveDashboard;
