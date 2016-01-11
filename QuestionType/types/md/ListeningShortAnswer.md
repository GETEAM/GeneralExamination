#ListeningShortAnswer(听力简答题)

##实际样题

There are three questions based on the passage you have just heard;

1. What was Cathy's job? She was a__________;

2. Which country relies heavily on nuclear power?

3. What do we learn about the people working in the shop?

##JSON结构

	{
		"stem": "There are three questions based on the passage you have just heard;<audio src="abc.mp3">",
		"show-stem-length": false,
		"flowable": true,
		"questions-num-limit": true,
		"pre-show": true,
		"questions": [	
			{
				"type": "BlankFilling",
				"stem": "What was Cathy's job? She was a__________;",		
				"pause": 10,			
				"strict": false,
				"reference-answer": "program",		
				"answer-analysis": "参考答案解析"
			},
			{
				"type": "SimpleAnswer",
				"stem": "Which country relies heavily on nuclear power?",		
				"pause": 60,			
				"strict": false,
				"reference-answer": "United States",		
				"answer-analysis": "参考答案解析"
			},
			{
				"type": "SimpleAnswer",
				"stem": "What do we learn about the people working in the shop?",		
				"pause": 60,			
				"strict": false,
				"reference-answer": "They are working very hard",		
				"answer-analysis": "参考答案解析"
			}
		]
	}
