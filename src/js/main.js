$ = document.querySelector.bind(document)

const urlApi = 'https://62b5bef6da3017eabb219982.mockapi.io/quizapp/quiz'

const container = $('.container')



const app = {
    topic: [
        'English',
    ],
    quizzess : [],
    getQuiz(){
        _this = this
        async function get() {
            const res = await fetch(urlApi)
            const quizzes  = await res.json()
            _this.renderQuiz(quizzes)
            _this.quizzess = quizzes
        }
        get()
    },
    renderQuiz(quizzes) {
        let html = ``
        this.topic.forEach((topic, index) => {
            html += `
                <div class="type-quiz-wrapper">
                    <div class="type-quiz-header">
                        <div class="type-quiz-name">${topic}</div>
                        <button class="type-quiz-btn btn" data-set="${index}">Xem thêm</button>
                    </div>
            `
            html += `<div class="list-quiz">`
            const arrQuiz = quizzes.map(quiz => {
                if (quiz.topic === topic) {
                    return `
                        <div class="quiz-item">
                            <div class="quiz-item__img" style="background-image: url('${quiz.img}');"></div>
                            <div class="quiz-item__description">
                                <span class="question-length">${quiz.numberQuestion} Qs</span>
                                <span class="times-played">${quiz.timesPlayed} chơi</span>
                            </div>
                            <div class="quiz-item__name">${quiz.name}</div>
                        </div>
                    `
                }
            })
            html += arrQuiz.join('') +'</div>' +'</div>' 
        });
        container.innerHTML = html
    },
    handleEvent() {
        // 

    },
    start() {
        this.getQuiz()
        console.log(this.quizzess)
    }
}

app.start()

// quizzess : [
//     {
//         id: 1,
//         name: 'English',
//         img: 'https://quizizz.com/media/resource/gs/quizizz-media/quizzes/b1a9da7a-8f9d-46c4-a3f3-b6c6834a6efa?w=200&h=200',
//         numberQuestion: 5,
//         timesPlayed: 1000,
//         topic: 'English',
//         question: [
//             ["hi", 1, "xin chao", "tam biet", "cam on", "xinloi"],
//             ["hi", 1, "xin chao", "tam biet", "cam on", "xinloi"],
//             ["hi", 1, "xin chao", "tam biet", "cam on", "xinloi"]
//         ]
//     },
//     {
//         id: 2,
//         name: 'Html',
//         img: 'https://quizizz.com/media/resource/gs/quizizz-media/quizzes/b1a9da7a-8f9d-46c4-a3f3-b6c6834a6efa?w=200&h=200',
//         numberQuestion: 10,
//         timesPlayed: 1000,
//         topic: 'Code',
//         question: [
//             ['hi', 1, 'xin chao', 'tam biet', 'cam on', 'xinloi'],
//             ['hi', 1, 'xin chao', 'tam biet', 'cam on', 'xinloi'],
//             ['hi', 1, 'xin chao', 'tam biet', 'cam on', 'xinloi'],
//         ]
//     },
//     {
//         id: 3,
//         name: 'Css',
//         img: 'https://quizizz.com/media/resource/gs/quizizz-media/quizzes/b1a9da7a-8f9d-46c4-a3f3-b6c6834a6efa?w=200&h=200',
//         numberQuestion: 7,
//         timesPlayed: 1000,
//         topic: 'Code',
//         question: [
//             ['hi', 1, 'xin chao', 'tam biet', 'cam on', 'xinloi'],
//             ['hi', 1, 'xin chao', 'tam biet', 'cam on', 'xinloi'],
//             ['hi', 1, 'xin chao', 'tam biet', 'cam on', 'xinloi'],
//         ]
//     },
//     {
//         id: 4,
//         name: 'Vocabulary',
//         img: 'https://quizizz.com/media/resource/gs/quizizz-media/quizzes/b1a9da7a-8f9d-46c4-a3f3-b6c6834a6efa?w=200&h=200',
//         numberQuestion: 10,
//         timesPlayed: 1000,
//         topic: 'English',
//         question: [
//             ['hi', 1, 'xin chao', 'tam biet', 'cam on', 'xinloi'],
//             ['hi', 1, 'xin chao', 'tam biet', 'cam on', 'xinloi'],
//             ['hi', 1, 'xin chao', 'tam biet', 'cam on', 'xinloi'],
//         ]
//     },
// ],