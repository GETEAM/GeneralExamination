#VideoComment(视频评述)

##实际样题

下面是段视频，请看完后评述该视频
A video

##JSON结构

	{
		"id": 1,						
		"stem": "下面是段视频，请看完后评述该视频 <video src="youku.mp4">",	
		"preShow": true,
		"questions": [
			{
				"type": "Record",
				"pause":120,
				"stem": "录音提示音<audio src="abc.mp3">",		
				"strict": false,
				"reference-answer": "略",		
				"answer-analysis": "参考答案解析"
			}
		]
	}