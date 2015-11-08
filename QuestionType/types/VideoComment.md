#VideoComment(视频评述)

##实际样题

下面是段视频，请看完后评述该视频
A video

##JSON结构

	{
		"id": 1,						
		"type": "VideoComment",			
		"level": 3,						
		"duration": 3,					
		"flowable": true,				
		"recommendation-point": 10,
		"stem": "下面是段视频，请看完后评述该视频",	
		"src": {
			"video": "视频地址"
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