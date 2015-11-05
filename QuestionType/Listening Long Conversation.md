#Listening Long Conversation

##实际样题

Question 1 
A.He teaches in a law school. 
B.He loves classical music. 
C.He is a diplomat. 
D.He is a wonderful lecturer. 

Question 2 
A.Went to see a play. 
B.Watched a soccer game. 
C.Took some photos. 
D.Attended a dance. 

Question 3 
A.She decided to get married in three years. 
B.Her mother objected to Eric’s flying lessons. 
C.She insisted that Eric pursue graduate studies. 
D.Her father said she could marry Eric right away. 

#JSON结构
	{
	    "id": 1,
		"type": "Listening Long Conversation",
		"level": 3,
		"duration": 10,
		"flowable": ture,
		"recommendation-point": 1,
		"questions"[
		{
		"type": "SingleChoice",
		"stem": Question 1,
		"options": [
		  "He teaches in a law school.",
		  "He loves classical music.",
		  "He is a diplomat.",
		  "He is a wonderful lecturer.",
		           ],
		"reference-answer": "1",
		},
		{
		"type": "SingleChoice",
		"stem": Question 2,
		"options": [
		  "Went to see a play.",
		  "Watched a soccer game.",
		  "Took some photos.",
		  "Attended a dance.",
		           ],
		"reference-answer": "2",
		},
		{
		"type": "SingleChoice",
		"stem": Question 3,
		"options": [
		  "She decided to get married in three years.",
		  "Her mother objected to Eric’s flying lessons.",
		  "Her mother objected to Eric’s flying lessons.",
		  "Her father said she could marry Eric right away.",
		           ],
		"reference-answer": "2",
		},
		],
	}