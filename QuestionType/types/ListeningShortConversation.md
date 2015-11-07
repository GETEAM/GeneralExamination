#ListeningShortConversation(听力短对话)

##实际样题

(An audio) 

A. The man is not good at balancing his budget.

B. She will go purchase the gift herself. 

C. The gift should not be too expensive. 

D. They are gonging to Jane's house-warming party. 

##JSON结构
	{
	    "id": 1,
		"type": "ListeningShortConversation",
		"level": 3,
		"duration": 10,
		"flowable": ture,
		"recommendation-point": 1,
		"questions":[
			{
				"type": "SingleChoice",
				"shuffle": true,
				"stem": "(An audio)",
				"options": [
		 			"The man is not good at balancing his budget.",
		  			"She will go purchase the gift herself.",
		  			"The gift should not be too expensive.",
		  			"They are gonging to Jane's house-warming party."
		  		],
		  		"strict": true,
				"reference-answer": 0,
				"answer-analysis": "答案解析"
			}
		]

	}