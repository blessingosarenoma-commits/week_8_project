<div className="space-y-4">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="border border-slate-200 rounded-lg p-4 hover:bg-slate-50 transition-colors"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-slate-900">{comment.author}</h4>
                    <p className="text-sm text-slate-500">{comment.timestamp}</p>
                  </div>
                  <button
                    onClick={() => handleLike(comment.id)}
                    className="flex items-center gap-1 text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    <ThumbsUp size={16} />
                    <span className="text-sm">{comment.likes}</span>
                  </button>
                </div>
                <p className="text-slate-700">{comment.content}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );