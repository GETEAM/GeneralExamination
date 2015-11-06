#Listening Situation Conversation

##实际样题

(An audio) 

Question 1 
A. Nodding one's head. 
B. Waving one's hand. 
C. Holding up the forefinger. 
D. Turning the right thumb down. 

Question 2 
A. Looking away from them. 
B. Forming a circle with fingers. 
C. Bowing one's head them. 
D. Waving or pointing to them. 

Question 3 
A. Looking one's superior in the eye. 
B. Keeping one's arms folded while talking. 
C. Showing the sole of one's foot to a guest. 
D. Using a lot of gestures during a conversation.

##JSON结构
	{
	    "id": 1,
		"type": "Listening Situation Conversation",
		"level": 3,
		"duration": 10,
		"flowable": ture,
		"recommendation-point": 1,
		"questions"[
			{
				"type": "SingleChoice",
				"stem": "Question 1",
				"options": [
		  			"Nodding one's head.",
		  			"Waving one's hand.",
		  			"Holding up the forefinger.",
		  			"Turning the right thumb down."
		    	],
				"reference-answer": 0
			},
			{
				"type": "SingleChoice",
				"stem": "Question 2",
				"options": [
		  			"Looking away from them.",
		  			"Forming a circle with fingers.",
		 			"Bowing one's head them.",
		 			"Waving or pointing to them."
		    	],
				"reference-answer": 1
			},
			{
				"type": "SingleChoice",
				"stem": "Question 3",
				"options": [
		  			"Looking one's superior in the eye.",
		  			"Keeping one's arms folded while talking.",
		  			"Showing the sole of one's foot to a guest.",
		  			"Using a lot of gestures during a conversation."
		   	 	],
			"reference-answer": 1
			}
		]
	}