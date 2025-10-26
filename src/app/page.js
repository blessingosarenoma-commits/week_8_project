import {useState} from 'react'
import {MessageCircle, User, Calendar, ArrowLeft, Send} from 'react'
const INITIAL_POSTS =[
    {
        id: 1,
        author: 'Blessing',
        content: 'Animals',
        timestamp: '3 hours ago',
        likes: 10

    },

    {

        id: 2,
        author:'Blessing',
        content: 'wild animals',
        timestamp: '4 hours ago',
        likes: 20,

    },
{
  const [newComment, setNewComment] = useState('');
  const [authorName, setAuthorName] = useState('');
   const handleSubmit = () => {
    if (newComment.trim() && authorName.trim()) {
      const comment = {
        id: comments.length + 1,
        author: authorName,
        content: newComment,
        timestamp: 'Just now',
        likes: 0
      };
      setComments([comment, ...comments]);
      setNewComment('');
      setAuthorName('');
    }
  }
 }

  const handleLike = (id) => {
    setComments(comments.map(comment =>
      comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-4xl mx-auto p-6">
        
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Animal Blog</h1>
          <p className="text-slate-600">lets take a dive into the animal world</p>
        </header>

    
        <article className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center gap-3 text-sm text-slate-500 mb-4">
            <div className="flex items-center gap-1">
              <User size={16} />
              <span>Alex Rivera</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <span>Oct 26, 2025</span>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Animal world
          </h2>

          <div className="prose prose-slate max-w-none">
            <p className="text-slate-700 leading-relaxed mb-4">
              lions are amongs wild animals
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-2 mt-6">useState </h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              dogs are example of domestic animals
            </p>

            <div className="bg-slate-900 rounded-lg p-4 mb-4">
              <code className="text-green-400 text-sm">
                const [count, setCount] = useState(0);
              </code>
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mb-2 mt-6">useEffect</h3>
            <p className="text-slate-700 leading-relaxed">
              There are both male and female lions, this makes lions among mammals
            </p>
          </div>
        </article>

       

      
          
            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Post Comment
            </button>
          </div>