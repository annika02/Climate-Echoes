import React, { useState } from 'react';
import { MessageCircle, Users, BookOpen, Heart, Share2, Calendar, User, ArrowRight, Facebook, MessageCircle as Messenger, MessageSquare } from 'lucide-react';

const CommunityPage = () => {
  const [activeTab, setActiveTab] = useState('blog');
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: "Understanding ENSO's Impact on Bangladesh Monsoon",
      excerpt: "Exploring how El Niño and La Niña patterns affect rainfall distribution across Bangladesh...",
      author: "Dr. Sarah Chen",
      date: "2024-01-15",
      likes: 24,
      comments: 8,
      category: "Research",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "NASA Terra Data: 25 Years of Climate Insights",
      excerpt: "How satellite data from NASA Terra has revolutionized our understanding of climate patterns...",
      author: "Climate Research Team",
      date: "2024-01-12",
      likes: 31,
      comments: 12,
      category: "Technology",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Community-Driven Climate Solutions",
      excerpt: "Local initiatives making a difference in climate adaptation and resilience...",
      author: "Community Manager",
      date: "2024-01-10",
      likes: 18,
      comments: 5,
      category: "Community",
      readTime: "4 min read"
    }
  ]);

  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "How does ENSO specifically affect agriculture in Bangladesh?",
      author: "Farmer123",
      date: "2024-01-14",
      answers: 3,
      votes: 7,
      tags: ["Agriculture", "ENSO", "Bangladesh"]
    },
    {
      id: 2,
      question: "What's the best way to access real-time ENSO data?",
      author: "ClimateStudent",
      date: "2024-01-13",
      answers: 5,
      votes: 12,
      tags: ["Data", "Tools", "Real-time"]
    },
    {
      id: 3,
      question: "How can local communities prepare for La Niña years?",
      author: "CommunityLeader",
      date: "2024-01-11",
      answers: 8,
      votes: 15,
      tags: ["Preparation", "Community", "La Niña"]
    }
  ]);

  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const [newQuestion, setNewQuestion] = useState('');

  const handleCreatePost = (e) => {
    e.preventDefault();
    if (newPost.title && newPost.content) {
      const post = {
        id: blogPosts.length + 1,
        title: newPost.title,
        excerpt: newPost.content.substring(0, 150) + '...',
        author: "You",
        date: new Date().toISOString().split('T')[0],
        likes: 0,
        comments: 0,
        category: "User Post",
        readTime: "3 min read"
      };
      setBlogPosts([post, ...blogPosts]);
      setNewPost({ title: '', content: '' });
    }
  };

  const handleAskQuestion = (e) => {
    e.preventDefault();
    if (newQuestion) {
      const question = {
        id: questions.length + 1,
        question: newQuestion,
        author: "You",
        date: new Date().toISOString().split('T')[0],
        answers: 0,
        votes: 0,
        tags: ["New"]
      };
      setQuestions([question, ...questions]);
      setNewQuestion('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Climate Echoes Community
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Join climate enthusiasts, researchers, and concerned citizens in discussing ENSO patterns, 
            sharing insights, and building climate resilience together.
          </p>
        </div>

        {/* Social Media Integration */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-12 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Join Our Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-blue-600 hover:bg-blue-700 rounded-xl p-6 text-white text-center transition-all duration-300 transform hover:scale-105"
            >
              <Facebook className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Facebook Group</h3>
              <p className="text-blue-100 text-sm">Join discussions and share updates</p>
              <div className="mt-4 text-xs bg-blue-700 px-3 py-1 rounded-full inline-block">
                2.4K Members
              </div>
            </a>

            <a 
              href="https://messenger.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-purple-600 hover:bg-purple-700 rounded-xl p-6 text-white text-center transition-all duration-300 transform hover:scale-105"
            >
              <Messenger className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Messenger Chat</h3>
              <p className="text-purple-100 text-sm">Real-time conversations</p>
              <div className="mt-4 text-xs bg-purple-700 px-3 py-1 rounded-full inline-block">
                Live Support
              </div>
            </a>

            <a 
              href="https://whatsapp.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-green-600 hover:bg-green-700 rounded-xl p-6 text-white text-center transition-all duration-300 transform hover:scale-105"
            >
              <MessageSquare className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">WhatsApp Group</h3>
              <p className="text-green-100 text-sm">Quick updates and alerts</p>
              <div className="mt-4 text-xs bg-green-700 px-3 py-1 rounded-full inline-block">
                500+ Members
              </div>
            </a>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="flex space-x-4 mb-8 border-b border-white/20">
          <button
            onClick={() => setActiveTab('blog')}
            className={`pb-4 px-4 font-semibold transition-all duration-300 ${
              activeTab === 'blog'
                ? 'text-blue-400 border-b-2 border-blue-400'
                : 'text-white/70 hover:text-white'
            }`}
          >
            <BookOpen className="w-5 h-5 inline mr-2" />
            Blog Posts
          </button>
          <button
            onClick={() => setActiveTab('qna')}
            className={`pb-4 px-4 font-semibold transition-all duration-300 ${
              activeTab === 'qna'
                ? 'text-green-400 border-b-2 border-green-400'
                : 'text-white/70 hover:text-white'
            }`}
          >
            <MessageCircle className="w-5 h-5 inline mr-2" />
            Q&A Forum
          </button>
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Create New Section */}
            {activeTab === 'blog' ? (
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">Create New Blog Post</h3>
                <form onSubmit={handleCreatePost}>
                  <input
                    type="text"
                    placeholder="Post Title"
                    value={newPost.title}
                    onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                    className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 mb-4"
                  />
                  <textarea
                    placeholder="Write your post content..."
                    value={newPost.content}
                    onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                    rows="4"
                    className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 mb-4"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Publish Post
                  </button>
                </form>
              </div>
            ) : (
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">Ask a Question</h3>
                <form onSubmit={handleAskQuestion}>
                  <textarea
                    placeholder="What would you like to know about ENSO and climate patterns?"
                    value={newQuestion}
                    onChange={(e) => setNewQuestion(e.target.value)}
                    rows="3"
                    className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 mb-4"
                  />
                  <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Ask Question
                  </button>
                </form>
              </div>
            )}

            {/* Posts/Questions List */}
            <div className="space-y-6">
              {activeTab === 'blog' ? (
                blogPosts.map((post) => (
                  <div key={post.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                        <h3 className="text-xl font-bold text-white mt-2">{post.title}</h3>
                      </div>
                      <span className="text-white/60 text-sm">{post.readTime}</span>
                    </div>
                    
                    <p className="text-white/80 mb-4">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-4 text-white/60">
                        <span className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {post.date}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <button className="flex items-center text-white/60 hover:text-red-400 transition-colors">
                          <Heart className="w-4 h-4 mr-1" />
                          {post.likes}
                        </button>
                        <button className="flex items-center text-white/60 hover:text-blue-400 transition-colors">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          {post.comments}
                        </button>
                        <button className="flex items-center text-white/60 hover:text-green-400 transition-colors">
                          <Share2 className="w-4 h-4 mr-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                questions.map((q) => (
                  <div key={q.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-white flex-1">{q.question}</h3>
                      <div className="text-center bg-green-500/20 rounded-lg p-2 min-w-16">
                        <div className="text-green-300 font-bold">{q.votes}</div>
                        <div className="text-green-300 text-xs">votes</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {q.tags.map((tag, index) => (
                        <span key={index} className="bg-white/10 text-white/80 px-2 py-1 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-white/60">
                      <div className="flex items-center space-x-4">
                        <span>By {q.author}</span>
                        <span>{q.date}</span>
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        {q.answers} answers
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Community Stats */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Community Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-white/80">
                  <span>Total Members</span>
                  <span className="text-white font-semibold">3,247</span>
                </div>
                <div className="flex justify-between text-white/80">
                  <span>Active Discussions</span>
                  <span className="text-white font-semibold">142</span>
                </div>
                <div className="flex justify-between text-white/80">
                  <span>Blog Posts</span>
                  <span className="text-white font-semibold">89</span>
                </div>
                <div className="flex justify-between text-white/80">
                  <span>Questions Answered</span>
                  <span className="text-white font-semibold">356</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                  <Users className="w-5 h-5 mr-2" />
                  Join Facebook Group
                </button>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Join WhatsApp
                </button>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                  <Messenger className="w-5 h-5 mr-2" />
                  Start Messenger Chat
                </button>
              </div>
            </div>

            {/* Featured Topics */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Trending Topics</h3>
              <div className="space-y-2">
                {['ENSO Prediction 2024', 'Bangladesh Flood Data', 'Climate Adaptation', 'NASA Terra Updates', 'Monsoon Patterns'].map((topic, index) => (
                  <div key={index} className="flex items-center text-white/70 hover:text-white transition-colors cursor-pointer group">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;