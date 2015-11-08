#ReadingTableFilling(阅读填表题)

##实际样题

There are many things that you should be careful with when you are alone at home. Read the following sulutions to protect yourself. 

* Keep the door locked when you are alone at home. Many people think it‘s the best way to protect themselves. 
* Keep a list of phone numbers to call for help---such as 110, the police station of a neighbor‘s number. 
* Be careful with the electrical appliance(电器). If you don‘t know how to use them, ask your parents. Make a safety check before going to sleep. 
* Look through the keyhole when you hear the doorbell. If there are strangers, ask ―Who‘s that? ‖ with the door locked and say ―Come back later.‖ Don‘t tell them that your parents are away. Say ―Mum‘s having a shower,‖ or ―Dad‘s having a sleep.


1 | 2 
-----|------
Situations    | Keep the door 1._______ 
You are alone home        |  Keep a list of phone number. 
To 2._______       |   Make a safety check of the electrical appliances. 
Before 3.________      |   Ask 4.____________?or with the door locked.
Talk to the strangers       |  Don't say your parents 5. ____________ 


##JSON结构

	{
		"id": 1,						
		"type": "ReadingTableFilling",			
		"level": 2,						
		"duration": 8,					
		"flowable": false,				
		"recommendation-point": 2,		
		"stem": "There are many things that you should be careful with when you are alone at home. 
		Read the following sulutions to protect yourself. 

		Keep the door locked when you are alone at home. Many people think it‘s the best 
		way to protect themselves. 
		Keep a list of phone numbers to call for help---such as 110, the police station of
		a neighbor‘s number. 
		Be careful with the electrical appliance(电器). If you don‘t know how to use them,
		ask your parents. Make a safety check before going to sleep. 
		Look through the keyhole when you hear the doorbell. If there are strangers, ask 
		―Who‘s that? ‖ with the door locked and say ―Come back later.‖ Don‘t tell them 
		that your parents are away. Say ―Mum‘s having a shower,‖ or ―Dad‘s having a sleep.",
		"questions": [
			{
				"type": "BlankedFilling",
				"pause": 10, 		
				"stem": "Keep the door _______",	
				"strict": true,	
				"reference-answer": "locked",		
				"answer-analysis": "参考答案解析"
			},
			{
				"type": "BlankedFilling",
				"pause": 10, 		
				"stem": "To _______",	
				"strict": true,	
				"reference-answer": "going to sleep",		
				"answer-analysis": "参考答案解析"
			},
			{
				"type": "BlankedFilling",
				"pause": 10, 		
				"stem": "Before ________",	
				"strict": true,	
				"reference-answer": "going to sleep",		
				"answer-analysis": "参考答案解析"
			},
			{
				"type": "BlankedFilling",
				"pause": 10, 		
				"stem": "Ask ____________?‖ with the door locked.",	
				"strict": true,	
				"reference-answer": "who's that",		
				"answer-analysis": "参考答案解析"
			},
			{
				"type": "BlankedFilling",
				"pause": 10, 		
				"stem": "Don‘t say your parents ____________",	
				"strict": true,	
				"reference-answer": "go way",		
				"answer-analysis": "参考答案解析"
			}
		]
	}
