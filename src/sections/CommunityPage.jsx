import React, { useState, useEffect } from 'react';
import { MessageCircle, Users, BookOpen, Heart, Calendar, User, ArrowRight, Facebook, MessageCircle as Messenger, MessageSquare, X } from 'lucide-react';

// Error Boundary Component
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return <h1 className="text-white text-center p-4">Something went wrong. Please try again later.</h1>;
    }
    return this.props.children;
  }
}

const CommunityPage = () => {
  const [activeTab, setActiveTab] = useState('blog');
  const [blogPosts, setBlogPosts] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const [newQuestion, setNewQuestion] = useState('');
  const [newComment, setNewComment] = useState({ id: null, content: '', type: 'post', parentId: null });
  const [message, setMessage] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  // Simulate logged-in state (replace with actual auth logic)
  const isLoggedIn = true;
  const currentUser = isLoggedIn ? 'You' : 'Anonymous';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsResponse = await fetch('http://localhost:5000/api/posts');
        if (!postsResponse.ok) throw new Error('Failed to fetch posts');
        const postsData = await postsResponse.json();
        setBlogPosts(Array.isArray(postsData) ? postsData.map(post => ({
          ...post,
          author: post.author || 'Anonymous', // Ensure author fallback
          comments: Array.isArray(post.comments) ? post.comments : [], // Ensure comments array
          date: post.date || new Date().toISOString() // Ensure date fallback
        })) : []);

        const questionsResponse = await fetch('http://localhost:5000/api/questions');
        if (!questionsResponse.ok) throw new Error('Failed to fetch questions');
        const questionsData = await questionsResponse.json();
        setQuestions(Array.isArray(questionsData) ? questionsData.map(q => ({
          ...q,
          author: q.author || 'Anonymous', // Ensure author fallback
          comments: Array.isArray(q.comments) ? q.comments : [], // Ensure comments array
          answersList: Array.isArray(q.answersList) ? q.answersList : [], // Ensure answers array
          date: q.date || new Date().toISOString() // Ensure date fallback
        })) : []);
      } catch (err) {
        console.error('Fetch error:', err);
        setMessage('Failed to load data. Check server connection.');
        setTimeout(() => setMessage(''), 3000);
      }
    };
    fetchData();
  }, []);

  const handleCreatePost = async (e) => {
    e.preventDefault();
    const trimmedTitle = newPost.title.trim();
    const trimmedContent = newPost.content.trim();
    if (trimmedTitle && trimmedContent && trimmedTitle !== '' && trimmedContent !== '') {
      try {
        const response = await fetch('http://localhost:5000/api/posts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title: trimmedTitle, content: trimmedContent, author: currentUser }),
        });
        if (!response.ok) throw new Error('Failed to create post');
        const post = await response.json();
        setBlogPosts([{ ...post, comments: Array.isArray(post.comments) ? post.comments : [], author: post.author || 'Anonymous', date: post.date || new Date().toISOString() }, ...blogPosts]);
        setNewPost({ title: '', content: '' });
        setMessage('Post created successfully!');
        setTimeout(() => setMessage(''), 3000);
      } catch (err) {
        setMessage('Failed to create post.');
        setTimeout(() => setMessage(''), 3000);
      }
    } else {
      setMessage('Title and content cannot be empty or whitespace.');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleAskQuestion = async (e) => {
    e.preventDefault();
    const trimmedQuestion = newQuestion.trim();
    if (trimmedQuestion && trimmedQuestion !== '') {
      try {
        const response = await fetch('http://localhost:5000/api/questions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ question: trimmedQuestion, author: currentUser }),
        });
        if (!response.ok) throw new Error('Failed to ask question');
        const question = await response.json();
        setQuestions([{ ...question, comments: Array.isArray(question.comments) ? question.comments : [], answersList: Array.isArray(question.answersList) ? question.answersList : [], author: question.author || 'Anonymous', date: question.date || new Date().toISOString() }, ...questions]);
        setNewQuestion('');
        setMessage('Question asked successfully!');
        setTimeout(() => setMessage(''), 3000);
      } catch (err) {
        setMessage('Failed to ask question.');
        setTimeout(() => setMessage(''), 3000);
      }
    } else {
      setMessage('Question cannot be empty or whitespace.');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleLikePost = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/posts/${id}/like`, { method: 'PATCH' });
      if (!response.ok) throw new Error('Failed to like post');
      const updatedPost = await response.json();
      setBlogPosts(blogPosts.map(post => post._id === id ? { ...updatedPost, comments: Array.isArray(updatedPost.comments) ? updatedPost.comments : [], author: updatedPost.author || 'Anonymous', date: updatedPost.date || new Date().toISOString() } : post));
    } catch (err) {
      setMessage('Failed to like post.');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const trimmedContent = newComment.content.trim();
    if (!currentUser || !trimmedContent || trimmedContent === '') return;
    const url = newComment.type === 'post'
      ? `/api/posts/${newComment.id}/comment`
      : `/api/questions/${newComment.id}/comment`;
    try {
      const response = await fetch(`http://localhost:5000${url}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          author: currentUser,
          text: trimmedContent,
          parentId: newComment.parentId,
        }),
      });
      if (!response.ok) throw new Error('Failed to add comment');
      const updatedItem = await response.json();
      if (newComment.type === 'post') {
        setBlogPosts(blogPosts.map(p => p._id === newComment.id ? { ...updatedItem, comments: Array.isArray(updatedItem.comments) ? updatedItem.comments : [], author: updatedItem.author || 'Anonymous', date: updatedItem.date || new Date().toISOString() } : p));
      } else {
        setQuestions(questions.map(q => q._id === newComment.id ? { ...updatedItem, comments: Array.isArray(updatedItem.comments) ? updatedItem.comments : [], answersList: Array.isArray(updatedItem.answersList) ? updatedItem.answersList : [], author: updatedItem.author || 'Anonymous', date: updatedItem.date || new Date().toISOString() } : q));
      }
      setNewComment({ id: null, content: '', type: 'post', parentId: null });
      setMessage(`${newComment.parentId ? 'Reply' : 'Comment'} added successfully!`);
      setTimeout(() => setMessage(''), 3000);
    } catch (err) {
      console.error('Comment error:', err);
      setMessage('Failed to add comment.');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleVoteQuestion = async (id, voteType) => {
    try {
      const response = await fetch(`http://localhost:5000/api/questions/${id}/vote`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ vote: voteType }),
      });
      if (!response.ok) throw new Error('Failed to vote on question');
      const updatedQuestion = await response.json();
      setQuestions(questions.map(q => q._id === id ? { ...updatedQuestion, comments: Array.isArray(updatedQuestion.comments) ? updatedQuestion.comments : [], answersList: Array.isArray(updatedQuestion.answersList) ? updatedQuestion.answersList : [], author: updatedQuestion.author || 'Anonymous', date: updatedQuestion.date || new Date().toISOString() } : q));
    } catch (err) {
      setMessage('Failed to vote on question.');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleAddAnswer = async (e, questionId) => {
    e.preventDefault();
    const trimmedContent = newComment.content.trim();
    if (!currentUser || !trimmedContent || trimmedContent === '') return;
    try {
      const response = await fetch(`http://localhost:5000/api/questions/${questionId}/answer`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ author: currentUser, text: trimmedContent }),
      });
      if (!response.ok) throw new Error('Failed to add answer');
      const updatedQuestion = await response.json();
      setQuestions(questions.map(q => q._id === questionId ? { ...updatedQuestion, comments: Array.isArray(updatedQuestion.comments) ? updatedQuestion.comments : [], answersList: Array.isArray(updatedQuestion.answersList) ? updatedQuestion.answersList : [], author: updatedQuestion.author || 'Anonymous', date: updatedQuestion.date || new Date().toISOString() } : q));
      setNewComment({ id: null, content: '', type: 'question', parentId: null });
      setMessage('Answer added successfully!');
      setTimeout(() => setMessage(''), 3000);
    } catch (err) {
      console.error('Answer error:', err);
      setMessage('Failed to add answer.');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const openModal = (item, type) => {
    if (!item || !type) return; // Prevent invalid modal opening
    setSelectedItem({ item: { ...item, author: item.author || 'Anonymous', date: item.date || new Date().toISOString() }, type });
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const formatDate = (date) => {
    try {
      return new Date(date).toLocaleDateString();
    } catch {
      return 'Unknown date';
    }
  };

  return (
    <ErrorBoundary>
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
                href="https://facebook.com/climateechoes"
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
                href="https://messenger.com/climateechoes"
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
                href="https://whatsapp.com/channel/climateechoes"
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
              onClick={() => {
                setActiveTab('blog');
                setNewComment({ id: null, content: '', type: 'post', parentId: null });
                setSelectedItem(null);
              }}
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
              onClick={() => {
                setActiveTab('qna');
                setNewComment({ id: null, content: '', type: 'question', parentId: null });
                setSelectedItem(null);
              }}
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
              {/* Message Feedback */}
              {message && (
                <div className="bg-green-500/20 text-green-100 p-3 rounded-lg text-center">
                  {message}
                </div>
              )}
              {/* Create New Section */}
              {activeTab === 'blog' ? (
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-4">Create New Blog Post</h3>
                  <form onSubmit={handleCreatePost}>
                    <input
                      type="text"
                      placeholder="Post Title"
                      value={newPost.title}
                      onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                      className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 mb-4"
                    />
                    <textarea
                      placeholder="Write your post content..."
                      value={newPost.content}
                      onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
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
                    <div key={post._id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                            {post.category || 'Uncategorized'}
                          </span>
                          <h3 className="text-xl font-bold text-white mt-2">{post.title || 'Untitled'}</h3>
                        </div>
                        <span className="text-white/60 text-sm">{post.readTime || 'Unknown'}</span>
                      </div>
                      <p className="text-white/80 mb-4">{post.excerpt || 'No excerpt available.'}</p>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-4 text-white/60">
                          <span className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            By: {post.author || 'Anonymous'}
                          </span>
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {formatDate(post.date)}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <button onClick={() => handleLikePost(post._id)} className="flex items-center text-white/60 hover:text-red-400 transition-colors">
                            <Heart className="w-4 h-4 mr-1" />
                            {post.likes || 0}
                          </button>
                          <button
                            onClick={() => setNewComment({ id: post._id, content: '', type: 'post' })}
                            className="flex items-center text-white/60 hover:text-blue-400 transition-colors"
                          >
                            <MessageCircle className="w-4 h-4 mr-1" />
                            {(Array.isArray(post.comments) ? post.comments.length : 0)}
                          </button>
                          <button
                            onClick={() => openModal(post, 'post')}
                            className="flex items-center text-white/60 hover:text-green-400 transition-colors"
                          >
                            <ArrowRight className="w-4 h-4 mr-1" />
                            Read More
                          </button>
                        </div>
                      </div>
                      {newComment.id === post._id && newComment.type === 'post' && !newComment.parentId && (
                        <form onSubmit={handleCommentSubmit} className="mt-4">
                          <textarea
                            value={newComment.content}
                            onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
                            className="w-full p-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 mb-2"
                            placeholder="Write a comment..."
                          />
                          <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold"
                          >
                            Submit Comment
                          </button>
                        </form>
                      )}
                      {(Array.isArray(post.comments) && post.comments.length > 0) && (
                        <div className="mt-4 space-y-2">
                          <h4 className="text-white font-semibold">Comments:</h4>
                          {post.comments.map((comment, idx) => (
                            <div key={idx} className="ml-4 p-2 bg-white/10 rounded-lg">
                              <p className="text-white/70 text-sm">
                                <span className="font-bold">{comment.author || 'Anonymous'}</span>: {comment.text || 'No comment text'}
                                <span className="text-xs text-white/50 ml-2">
                                  ({formatDate(comment.date)})
                                </span>
                              </p>
                              {isLoggedIn && (
                                <button
                                  onClick={() => setNewComment({ id: post._id, content: '', type: 'post', parentId: comment._id })}
                                  className="text-blue-400 text-xs mt-1 hover:text-blue-300"
                                >
                                  Reply
                                </button>
                              )}
                              {newComment.id === post._id && newComment.type === 'post' && newComment.parentId === comment._id && (
                                <form onSubmit={handleCommentSubmit} className="mt-2 ml-4">
                                  <textarea
                                    value={newComment.content}
                                    onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
                                    className="w-full p-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 mb-2"
                                    placeholder="Write a reply..."
                                  />
                                  <button
                                    type="submit"
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold"
                                  >
                                    Submit Reply
                                  </button>
                                </form>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  questions.map((q) => (
                    <div key={q._id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-bold text-white flex-1">{q.question || 'Untitled Question'}</h3>
                        <div className="text-center bg-green-500/20 rounded-lg p-2 min-w-16">
                          <div className="text-green-300 font-bold">{q.votes || 0}</div>
                          <div className="text-green-300 text-xs">votes</div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {(Array.isArray(q.tags) ? q.tags : []).map((tag, index) => (
                          <span key={index} className="bg-white/10 text-white/80 px-2 py-1 rounded text-xs">
                            {tag || 'Untagged'}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-sm text-white/60">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            Asked by: <span className="font-bold">{q.author || 'Anonymous'}</span>
                          </span>
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {formatDate(q.date)}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          {(Array.isArray(q.answersList) ? q.answersList.length : 0)} answers
                        </div>
                      </div>
                      <div className="mt-4">
                        <button
                          onClick={() => setNewComment({ id: q._id, content: '', type: 'question' })}
                          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold mb-2"
                        >
                          Add Comment or Answer
                        </button>
                        {newComment.id === q._id && newComment.type === 'question' && !newComment.parentId && (
                          <div className="space-y-4">
                            <form onSubmit={handleCommentSubmit} className="space-y-2">
                              <textarea
                                value={newComment.content}
                                onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
                                className="w-full p-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50"
                                placeholder="Write a comment..."
                              />
                              <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold"
                              >
                                Submit Comment
                              </button>
                            </form>
                            <form onSubmit={(e) => { e.preventDefault(); handleAddAnswer(e, q._id); }} className="space-y-2">
                              <textarea
                                value={newComment.content}
                                onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
                                className="w-full p-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50"
                                placeholder="Write an answer..."
                              />
                              <button
                                type="submit"
                                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold"
                              >
                                Submit Answer
                              </button>
                            </form>
                          </div>
                        )}
                        {(Array.isArray(q.comments) && q.comments.length > 0 || Array.isArray(q.answersList) && q.answersList.length > 0) && (
                          <div className="mt-4 space-y-4">
                            <h4 className="text-white font-semibold">Responses:</h4>
                            {[...(Array.isArray(q.comments) ? q.comments : []), ...(Array.isArray(q.answersList) ? q.answersList : [])].map((response, idx) => (
                              <div key={idx} className="ml-4 p-2 bg-white/10 rounded-lg">
                                <p className="text-white/70 text-sm">
                                  <span className="font-bold">{response.author || 'Anonymous'}</span>: {response.text || 'No text available'}
                                  <span className="text-xs text-white/50 ml-2">
                                    ({formatDate(response.date)})
                                  </span>
                                </p>
                                {response.parentId && <p className="text-xs text-white/50 ml-4">Reply to Answer</p>}
                                {isLoggedIn && (
                                  <button
                                    onClick={() => setNewComment({ id: q._id, content: '', type: 'question', parentId: response._id })}
                                    className="text-blue-400 text-xs mt-1 hover:text-blue-300"
                                  >
                                    Reply
                                  </button>
                                )}
                                {newComment.id === q._id && newComment.type === 'question' && newComment.parentId === response._id && (
                                  <form onSubmit={handleCommentSubmit} className="mt-2 ml-4">
                                    <textarea
                                      value={newComment.content}
                                      onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
                                      className="w-full p-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 mb-2"
                                      placeholder="Write a reply..."
                                    />
                                    <button
                                      type="submit"
                                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold"
                                    >
                                      Submit Reply
                                    </button>
                                  </form>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="mt-4 flex space-x-4">
                        <button onClick={() => handleVoteQuestion(q._id, 'up')} className="text-green-400 hover:text-green-300">
                          ↑ Upvote
                        </button>
                        <button onClick={() => handleVoteQuestion(q._id, 'down')} className="text-red-400 hover:text-red-300">
                          ↓ Downvote
                        </button>
                      </div>
                      <button
                        onClick={() => openModal(q, 'question')}
                        className="mt-4 flex items-center text-white/60 hover:text-green-400 transition-colors"
                      >
                        <ArrowRight className="w-4 h-4 mr-1" />
                        Read More
                      </button>
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
                    <span className="text-white font-semibold">{blogPosts.length}</span>
                  </div>
                  <div className="flex justify-between text-white/80">
                    <span>Questions Answered</span>
                    <span className="text-white font-semibold">
                      {Array.isArray(questions) ? questions.reduce((sum, q) => sum + (Array.isArray(q.answersList) ? q.answersList.length : 0), 0) : 0}
                    </span>
                  </div>
                </div>
              </div>
              {/* Quick Actions */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <a href="https://facebook.com/climateechoes" target="_blank" rel="noopener noreferrer" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                    <Users className="w-5 h-5 mr-2" />
                    Join Facebook Group
                  </a>
                  <a href="https://whatsapp.com/channel/climateechoes" target="_blank" rel="noopener noreferrer" className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Join WhatsApp
                  </a>
                  <a href="https://messenger.com/climateechoes" target="_blank" rel="noopener noreferrer" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                    <Messenger className="w-5 h-5 mr-2" />
                    Start Messenger Chat
                  </a>
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
          {/* Read More Modal */}
          {selectedItem && (
            <div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              onClick={closeModal}
            >
              <div
                className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 max-w-2xl w-full border border-white/20 overflow-y-auto max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-white hover:text-red-400"
                >
                  <X className="w-6 h-6" />
                </button>
                {/* Title / Question */}
                <h2 className="text-2xl font-bold text-white mb-3">
                  {selectedItem.type === 'post'
                    ? selectedItem.item.title || 'Untitled'
                    : selectedItem.item.question || 'Untitled Question'}
                </h2>
                {/* Content or Description */}
                {selectedItem.type === 'post' && (
                  <p className="text-white/80 mb-4">
                    {selectedItem.item.content || 'No content available.'}
                  </p>
                )}
                {/* Author & Date */}
                <div className="text-sm text-white/60 mb-6">
                  <span>
                    By: <span className="font-bold text-white">{selectedItem.item.author || 'Anonymous'}</span>
                  </span>
                  <span className="ml-4">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    {formatDate(selectedItem.item.date)}
                  </span>
                </div>
                {/* Blog Post Comments */}
                {selectedItem.type === 'post' && Array.isArray(selectedItem.item.comments) && selectedItem.item.comments.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="text-white font-semibold border-b border-white/20 pb-1">
                      Comments
                    </h4>
                    {selectedItem.item.comments.map((comment, idx) => (
                      <div key={idx} className="bg-white/10 rounded-lg p-3">
                        <p className="text-white/80 text-sm">
                          <span className="font-bold text-white">
                            {comment.author || 'Anonymous'}
                          </span>
                          : {comment.text || 'No comment text'}
                        </p>
                        <p className="text-xs text-white/50 mt-1">
                          {formatDate(comment.date)}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
                {/* Q&A Responses */}
                {selectedItem.type === 'question' && (
                  <div className="space-y-6">
                    {/* Comments */}
                    {Array.isArray(selectedItem.item.comments) && selectedItem.item.comments.length > 0 && (
                      <div>
                        <h4 className="text-white font-semibold border-b border-white/20 pb-1">
                          Comments
                        </h4>
                        {selectedItem.item.comments.map((comment, idx) => (
                          <div key={idx} className="bg-white/10 rounded-lg p-3 mt-2">
                            <p className="text-white/80 text-sm">
                              <span className="font-bold text-white">
                                {comment.author || 'Anonymous'}
                              </span>
                              : {comment.text || 'No comment text'}
                            </p>
                            <p className="text-xs text-white/50 mt-1">
                              {formatDate(comment.date)}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                    {/* Answers */}
                    {Array.isArray(selectedItem.item.answersList) && selectedItem.item.answersList.length > 0 && (
                      <div>
                        <h4 className="text-white font-semibold border-b border-white/20 pb-1">
                          Answers
                        </h4>
                        {selectedItem.item.answersList.map((answer, idx) => (
                          <div key={idx} className="bg-green-500/10 rounded-lg p-3 mt-2">
                            <p className="text-white/80 text-sm">
                              <span className="font-bold text-green-300">
                                {answer.author || 'Anonymous'}
                              </span>
                              : {answer.text || 'No answer text'}
                            </p>
                            <p className="text-xs text-white/50 mt-1">
                              {formatDate(answer.date)}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default CommunityPage;