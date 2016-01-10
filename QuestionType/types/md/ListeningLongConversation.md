#ListeningLongConversation(听力长对话)

##实际样题

Followed 3 questions are based on the long conversation you have just heard.(item题干为一段音频) 

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
		"stem": "Followed 3 questions are based on the long conversation you have just heard.<audio src="abc.mp3">",
		"show-stem-lenght": false,
		"flowable": true,
		"questions-num-limit": true,
		"preShow": true,
		"questions"：[
			{
				"type": "SingleChoice",
				"stem": "<audio src="abc.mp3">",
				"pause": 5,
				"shuffle": true,
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
				"stem": "<audio src="abc.mp3">",
				"pause": 5,
				"shuffle": true,
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
				"stem": "<audio src="abc.mp3">",
				"pause": 5,
				"shuffle": true,
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