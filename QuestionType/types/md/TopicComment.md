# TopicComment(话题评述)

## 实际样题

Mike是你的好朋友，他有一些不良习惯。请你根据下面的提示词，用6个以上的句子给他一点建议

提示：

姓名：Mike 

问题：不爱运动，爱吃零食；体型偏胖；他的父母很担心他的健康，

建议：do more exercise, eat less food, snacks, junk food, unhealthy, fruit and vegetables


## JSON结构

    {
        "id": 1,                              
        "stem": "Mike是你的好朋友，他有一些不良习惯。请你根据下面的提示词，用6个以上的句子给他一点建议
        提示：姓名：Mike 
        问题：不爱运动，爱吃零食；体型偏胖；他的父母很担心他的健康，
        建议：do more exercise, eat less food, snacks, junk food, unhealthy, fruit and vegetables</p>",
        "preShow": true,
        "questions": [     
            {
                "type": "Record",
                "pause": 180,
                "stem": "录音提示音<audio src="abc.mp3">",
                "strict": false,                   
                "reference-answer": "无",
                "answer-analysis": "答案解析"    
            }
        ]
    }