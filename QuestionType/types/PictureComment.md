#PictureComment(图片评述)

##实际样题

![cmd-markdown-logo](https://www.zybuluo.com/static/img/logo.png)

##JSON结构

	{
		"id": 1,						
		"type": "PictureComment",			
		"level": 3,						
		"duration": 3,					
		"flowable": true,				
		"recommendation-point": 10,		
		"src": {
			"image": "图片地址"
		},
		"questions": [
			{
				"type": "Record",
				"pause":120,		
				"strict": false,
				"reference-answer": "略",		
				"answer-analysis": "参考答案解析"
			}
		]
	}
