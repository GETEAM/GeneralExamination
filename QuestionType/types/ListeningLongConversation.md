#ListeningLongConversation(听力长对话)

##实际样题

Followed 3 questions are based on the passage you have just heard.(item题干为一段音频) 

(小题题干为一段音频)

A. He teaches in a law school. 

B. He loves classical music. 

C. He is a diplomat. 

D. He is a wonderful lecturer. 

(小题题干为一段音频)

A. Went to see a play. 

B. Watched a soccer game. 

C. Took some photos. 

D. Attended a dance. 

(小题题干为一段音频)

A. She decided to get married in three years. 

B. Her mother objected to Eric’s flying lessons. 

C. She insisted that Eric pursue graduate studies. 

D. Her father said she could marry Eric right away. 

##JSON结构

	{
	    "id": 1,
		"type": "ListeningLongConversation",
		"level": 3,
		"duration": 10,
		"flowable": ture,
		"recommendation-point": 1,
		"stem": "Followed 3 questions are based on the passage you have just heard.",
		"src": "item题干音频"
		"questions"：[
			{
				"type": "SingleChoice",
				"shuffle": true,
				"pause": 3,
				"src": "question题干音频",
				"options": [
			  		"He teaches in a law school.",
			  		"He loves classical music.",
			  		"He is a diplomat.",
			  		"He is a wonderful lecturer."
			    ],
			    "strict": true,
				"reference-answer": 1,
				"answer-analysis": "参考答案解析"
			},
			{
				"type": "SingleChoice",
				"shuffle": true,
				"pause": 3,
				"src": "question题干音频",
				"options": [
			  		"Went to see a play.",
			  		"Watched a soccer game.",
			  		"Took some photos.",
			  		"Attended a dance."
			    ],
				"strict": true,
				"reference-answer": 1,
				"answer-analysis": "参考答案解析"
			},
			{
				"type": "SingleChoice",
				"shuffle": true,
				"pause": 3,
				"src": "question题干音频",
				"options": [
			 		"She decided to get married in three years.",
			  		"Her mother objected to Eric’s flying lessons.",
			  		"Her mother objected to Eric’s flying lessons.",
			  		"Her father said she could marry Eric right away."
			    ],
				"strict": true,
				"reference-answer": 1,
				"answer-analysis": "参考答案解析"
			}
		]
	}