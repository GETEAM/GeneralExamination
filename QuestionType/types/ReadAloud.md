# ReadAloud(朗读)

## 实际样题

给你50秒钟时间准备朗读。当听到“开始录音”的信号后，立即在80秒钟内朗读短文一遍， 当听到要求“停止录音”的信号时，应立即中止朗读。（操作说明：学生朗读的准备时间为50秒钟，录音时间为80秒钟。 当80秒钟过后，电脑播出录音中止信号） 

Disneyland is a famous park in the USA.Its founder was Walt Disney.He is famous for his cartoon characters such as Mickey Mouse,Donald Duck, Goofy and Snow White.Disney was born in the USA.After leaving school, he sold newspapers and delivered letters. At the same time, he studied art at night. Finally, he got a job drawing cartoons for films. Sometimes a mouse sat on Walts desk when he was at work. He drew the mouse and put it in a cartoon. This became Disney's most famous cartoon character- Mickey Mouse. Mickey soon became a star and Disney became rich and famous 


## JSON格式
  
    {    
        "id": 1,                       
        "type": "Reading",          
        "level": 3,                       
        "duration": 2,                   
        "flowable": true,                
        "recommendation-point": 10,       
        "stem": "给你50秒钟时间准备朗读。当听到“开始录音”的信号后，立即在80秒钟内朗读短文一遍， 当听到要求“停止录音”的信号时，应立即中止朗读。（操作说明：学生朗读的准备时间为50秒钟，录音时间为80秒钟。 当80秒钟过后，电脑播出录音中止信号）",
        "src": {
            "audio": "音频地址、用来播放开始录音提示"
        },
        "questions": [
            {
                "type": "spoken language",          
                "stem": "Disneyland is a famous park in the USA.Its founder was Walt Disney.He is famous for his cartoon characters such as Mickey Mouse,Donald Duck, Goofy and Snow White.Disney was born in the USA.After leaving school, he sold newspapers and delivered letters. At the same time, he studied art at night. Finally, he got a job drawing cartoons for films. Sometimes a mouse sat on Walts desk when he was at work. He drew the mouse and put it in a cartoon. This became Disney's most famous cartoon character- Mickey Mouse. Mickey soon became a star and Disney became rich and famous",           
                "strict": false,
                "reference-answer": "无",
                "answer-analysis": "答案解析"
            }
        ]
    }