// localStorage에 영화 정보 저장
/**
 * 1. 영화 선택
 * 1.1 현재 시간에 따라 상영이 끝난 영화는 invisible.
 * 
 * 1.2 영화 선택시 바뀌는 것:
 * theaterBig 숫자,
 * theaterSmall 가능한 영화관,
 * 시간대,
 * 시간대 nav bar
 *
 * 1.3 영화 선택시 안바뀌는 것:
 * theaterBig 지역
 */

// movies
const movieAll = [
    {
        name: '극장판 귀멸의 칼날: 무한열차편',
        avaliable: [
            // Seoul
            {
                name: '강남',
                info: [
                    {
                        duration: '10:00~12:07',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '11:35~13:42',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '13:00~15:27',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:00~20:07',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:50~20:57',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '강남대로(씨티)',
                info: [
                    {
                        duration: '09:10~11:17',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '12:55~15:02',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '13:00~15:27',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '17:30~19:57',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:50~20:57',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '강동',
                info: [
                    {
                        duration: '10:27~12:34',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '11:39~13:46',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '12:11~14:38',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '17:20~19:37',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:42~20:49',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '군자',
                info: [
                    {
                        duration: '09:30~11:37',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '11:05~13:12',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '13:30~15:57',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:02~20:09',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:55~21:02',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '동대문',
                info: [
                    {
                        duration: '09:20~11:27',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '10:35~12:42',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '15:00~17:27',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '17:18~19:25',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '20:12~22:39',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            // Gyeonggi
            {
                name: '고양스타필드',
                info: [
                    {
                        duration: '10:08~12:15',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '10:58~13:00',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '11:30~13:57',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:10~20:17',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '19:57~22:04',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '김포한강신도시',
                info: [
                    {
                        duration: '09:40~11:47',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '10:33~12:40',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '15:00~17:27',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '20:00~22:07',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '남양주',
                info: []
            },
            {
                name: '동탄',
                info: [
                    {
                        duration: '10:04~12:16',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '11:22~13:28',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '13:20~15:47',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '17:59~20:04',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:52~21:00',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '미사강변',
                info: [
                    {
                        duration: '09:20~11:27',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '10:20~12:27',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '12:02~14:25',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:21~20:28',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '19:00~21:07',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '백석',
                info: [
                    {
                        duration: '09:33~11:40',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '09:40~11:47',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '11:02~13:25',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '15:21~17:28',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:00~20:07',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '별내',
                info: [
                    {
                        duration: '09:25~11:32',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '10:27~12:34',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '12:22~14:45',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:32~20:39',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '19:04~21:11',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '분당',
                info: [
                    {
                        duration: '09:24~11:31',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '10:24~12:31',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '12:06~14:29',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:25~20:32',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '19:07~21:14',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            // Incheon
            {
                name: '검단',
                info: [
                    {
                        duration: '10:10~12:17',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '10:34~12:41',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '12:02~14:25',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:25~20:32',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '19:01~21:08',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '송도',
                info: [
                    {
                        duration: '10:28~12:35',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '10:55~12:48',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '12:24~14:47',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:12~20:19',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '19:29~21:36',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '영종',
                info: [
                    {
                        duration: '10:27~12:34',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '10:17~12:24',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '11:59~14:22',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:29~20:36',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '19:28~21:35',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '인천논현',
                info: [
                    {
                        duration: '09:38~11:45',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '10:32~12:39',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '11:02~13:25',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '17:25~19:32',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:01~20:08',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '청라지젤',
                info: [
                    {
                        duration: '10:11~12:18',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '10:31~12:38',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '12:07~14:30',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:18~20:25',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:52~20:59',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            }
        ]
    },
    {
        name: '소울',
        avaliable: [
            // Seoul
            {
                name: '강남',
                info: [
                    {
                        duration: '10:00~12:07',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '11:35~13:42',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '13:00~15:27',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:00~20:07',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:50~20:57',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '강남대로(씨티)',
                info: [
                    {
                        duration: '09:10~11:17',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '12:55~15:02',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '13:00~15:27',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '17:30~19:57',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:50~20:57',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '강동',
                info: [
                    {
                        duration: '10:27~12:34',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '11:39~13:46',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '12:11~14:38',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '17:20~19:37',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:42~20:49',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '군자',
                info: [
                    {
                        duration: '09:30~11:37',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '11:05~13:12',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '13:30~15:57',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:02~20:09',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:55~21:02',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '동대문',
                info: [
                    {
                        duration: '09:20~11:27',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '10:35~12:42',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '15:00~17:27',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '17:18~19:25',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '20:12~22:39',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            // Gyeonggi
            {
                name: '고양스타필드',
                info: [
                    {
                        duration: '10:08~12:15',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '10:58~13:00',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '11:30~13:57',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:10~20:17',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '19:57~22:04',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '김포한강신도시',
                info: [
                    {
                        duration: '09:40~11:47',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '10:33~12:40',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '15:00~17:27',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '20:00~22:07',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '남양주',
                info: []
            },
            {
                name: '동탄',
                info: [
                    {
                        duration: '10:04~12:16',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '11:22~13:28',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '13:20~15:47',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '17:59~20:04',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:52~21:00',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '미사강변',
                info: [
                    {
                        duration: '09:20~11:27',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '10:20~12:27',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '12:02~14:25',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:21~20:28',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '19:00~21:07',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '백석',
                info: [
                    {
                        duration: '09:33~11:40',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '09:40~11:47',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '11:02~13:25',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '15:21~17:28',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:00~20:07',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '별내',
                info: [
                    {
                        duration: '09:25~11:32',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '10:27~12:34',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '12:22~14:45',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:32~20:39',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '19:04~21:11',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '분당',
                info: [
                    {
                        duration: '09:24~11:31',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '10:24~12:31',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '12:06~14:29',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:25~20:32',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '19:07~21:14',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            // Incheon
            {
                name: '검단',
                info: [
                    {
                        duration: '10:10~12:17',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '10:34~12:41',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '12:02~14:25',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:25~20:32',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '19:01~21:08',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '송도',
                info: [
                    {
                        duration: '10:28~12:35',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '10:55~12:48',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '12:24~14:47',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:12~20:19',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '19:29~21:36',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '영종',
                info: [
                    {
                        duration: '10:27~12:34',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '10:17~12:24',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '11:59~14:22',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:29~20:36',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '19:28~21:35',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '인천논현',
                info: [
                    {
                        duration: '09:38~11:45',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '10:32~12:39',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '11:02~13:25',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '17:25~19:32',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:01~20:08',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '청라지젤',
                info: [
                    {
                        duration: '10:11~12:18',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '10:31~12:38',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '12:07~14:30',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:18~20:25',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:52~20:59',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            }
        ]
    },
    {
        name: '사일런싱',
        avaliable: [
            // Seoul
            {
                name: '강남',
                info: [
                    {
                        duration: '10:00~12:07',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '11:35~13:42',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '13:00~15:27',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:00~20:07',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:50~20:57',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '강남대로(씨티)',
                info: [
                    {
                        duration: '09:10~11:17',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '12:55~15:02',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '13:00~15:27',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '17:30~19:57',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:50~20:57',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '강동',
                info: [
                    {
                        duration: '10:27~12:34',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '11:39~13:46',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '12:11~14:38',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '17:20~19:37',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:42~20:49',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '군자',
                info: [
                    {
                        duration: '09:30~11:37',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '11:05~13:12',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '13:30~15:57',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:02~20:09',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:55~21:02',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '동대문',
                info: [
                    {
                        duration: '09:20~11:27',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '10:35~12:42',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '15:00~17:27',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '17:18~19:25',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '20:12~22:39',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            // Gyeonggi
            {
                name: '고양스타필드',
                info: [
                    {
                        duration: '10:08~12:15',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '10:58~13:00',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '11:30~13:57',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:10~20:17',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '19:57~22:04',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '김포한강신도시',
                info: [
                    {
                        duration: '09:40~11:47',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '10:33~12:40',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '15:00~17:27',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '20:00~22:07',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '남양주',
                info: []
            },
            {
                name: '동탄',
                info: [
                    {
                        duration: '10:04~12:16',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '11:22~13:28',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '13:20~15:47',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '17:59~20:04',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:52~21:00',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '미사강변',
                info: [
                    {
                        duration: '09:20~11:27',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '10:20~12:27',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '12:02~14:25',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:21~20:28',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '19:00~21:07',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '백석',
                info: [
                    {
                        duration: '09:33~11:40',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '09:40~11:47',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '11:02~13:25',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '15:21~17:28',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:00~20:07',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '별내',
                info: [
                    {
                        duration: '09:25~11:32',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '10:27~12:34',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '12:22~14:45',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:32~20:39',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '19:04~21:11',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '분당',
                info: [
                    {
                        duration: '09:24~11:31',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '10:24~12:31',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '12:06~14:29',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:25~20:32',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '19:07~21:14',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            // Incheon
            {
                name: '검단',
                info: [
                    {
                        duration: '10:10~12:17',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '10:34~12:41',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '12:02~14:25',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:25~20:32',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '19:01~21:08',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '송도',
                info: [
                    {
                        duration: '10:28~12:35',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '10:55~12:48',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '12:24~14:47',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:12~20:19',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '19:29~21:36',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '영종',
                info: [
                    {
                        duration: '10:27~12:34',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '10:17~12:24',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '11:59~14:22',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:29~20:36',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '19:28~21:35',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '인천논현',
                info: [
                    {
                        duration: '09:38~11:45',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '10:32~12:39',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '11:02~13:25',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '17:25~19:32',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:01~20:08',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '청라지젤',
                info: [
                    {
                        duration: '10:11~12:18',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '10:31~12:38',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '12:07~14:30',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:18~20:25',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:52~20:59',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            }
        ]
    },
    {
        name: '세자매',
        avaliable: [
            // Seoul
            {
                name: '강남',
                info: [
                    {
                        duration: '10:00~12:07',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '11:35~13:42',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '13:00~15:27',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:00~20:07',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:50~20:57',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '강남대로(씨티)',
                info: [
                    {
                        duration: '09:10~11:17',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '12:55~15:02',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '13:00~15:27',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '17:30~19:57',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:50~20:57',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '강동',
                info: [
                    {
                        duration: '10:27~12:34',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '11:39~13:46',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '12:11~14:38',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '17:20~19:37',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:42~20:49',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '군자',
                info: [
                    {
                        duration: '09:30~11:37',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '11:05~13:12',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '13:30~15:57',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:02~20:09',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:55~21:02',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '동대문',
                info: [
                    {
                        duration: '09:20~11:27',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '10:35~12:42',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '15:00~17:27',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '17:18~19:25',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '20:12~22:39',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            // Gyeonggi
            {
                name: '고양스타필드',
                info: [
                    {
                        duration: '10:08~12:15',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '10:58~13:00',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '11:30~13:57',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:10~20:17',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '19:57~22:04',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '김포한강신도시',
                info: [
                    {
                        duration: '09:40~11:47',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '10:33~12:40',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '15:00~17:27',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '20:00~22:07',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '남양주',
                info: []
            },
            {
                name: '동탄',
                info: [
                    {
                        duration: '10:04~12:16',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '11:22~13:28',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '13:20~15:47',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '17:59~20:04',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:52~21:00',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '미사강변',
                info: [
                    {
                        duration: '09:20~11:27',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '10:20~12:27',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '12:02~14:25',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:21~20:28',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '19:00~21:07',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '백석',
                info: [
                    {
                        duration: '09:33~11:40',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '09:40~11:47',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '11:02~13:25',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '15:21~17:28',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:00~20:07',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '별내',
                info: [
                    {
                        duration: '09:25~11:32',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '10:27~12:34',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '12:22~14:45',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:32~20:39',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '19:04~21:11',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '분당',
                info: [
                    {
                        duration: '09:24~11:31',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '10:24~12:31',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '12:06~14:29',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:25~20:32',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '19:07~21:14',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            // Incheon
            {
                name: '검단',
                info: [
                    {
                        duration: '10:10~12:17',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '10:34~12:41',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '12:02~14:25',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:25~20:32',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '19:01~21:08',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '송도',
                info: [
                    {
                        duration: '10:28~12:35',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '10:55~12:48',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '12:24~14:47',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:12~20:19',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '19:29~21:36',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '영종',
                info: [
                    {
                        duration: '10:27~12:34',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '10:17~12:24',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '11:59~14:22',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:29~20:36',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '19:28~21:35',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '인천논현',
                info: [
                    {
                        duration: '09:38~11:45',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '10:32~12:39',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '11:02~13:25',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '17:25~19:32',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:01~20:08',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            },
            {
                name: '청라지젤',
                info: [
                    {
                        duration: '10:11~12:18',
                        section: '1관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '10:31~12:38',
                        section: '2관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '12:07~14:30',
                        section: '3관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:18~20:25',
                        section: '4관',
                        seatAvail: 132,
                        seatMax: 275
                    },
                    {
                        duration: '18:52~20:59',
                        section: '5관',
                        seatAvail: 132,
                        seatMax: 275
                    }
                ]
            }
        ]
    }

]

// theaters
const theaterAll = [
    {
        name: '서울',
        number: 5,
        theaterSeoul: [
            '강남',
            '강남대로(씨티)',
            '강동',
            '군자',
            '동대문'
        ]
    },
    {
        name: '경기',
        number: 8,
        theaterGyeonggi: [
            '고양스타필드',
            '김포한강신도시',
            '남양주',
            '동탄',
            '미사걍변',
            '백석',
            '별내',
            '분당'
        ]
    },
    {
        name: '인천',
        number: 5,
        theaterIncheon: [
            '검단',
            '송도',
            '영종',
            '인천논현',
            '청라지젤'
        ]
    }
]

// 로컬 스토리지에 저장
window.localStorage.setItem('movie', JSON.stringify(movieAll));
window.localStorage.setItem('theater', JSON.stringify(theaterAll));
console.log(movieAll);
console.log(theaterAll);

// 로컬 스토리지에서 배열 반환
const movieArray = JSON.parse(localStorage.getItem('movie'));
const theaterArray = JSON.parse(localStorage.getItem('theater'));
console.log(movieArray[0]);
console.log(theaterArray[0]);
