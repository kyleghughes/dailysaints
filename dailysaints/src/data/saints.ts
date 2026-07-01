export interface Saint {
  month: number;
  day: number;
  name: string;
  image: string;
  description: string;
  patronOf?: string;
}

export const saints: Saint[] = [
  {
    month: 6,
    day: 29,
    name: "Saint Peter",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Pope-peter_pprubens.jpg/250px-Pope-peter_pprubens.jpg",
    description:
      "Saint Peter, originally named Simon, was one of the Twelve Apostles and is traditionally regarded as the first Pope of the Church. A fisherman by trade, he was called by Jesus to become a 'fisher of men'. He is known for his strong faith, his moments of human weakness, and his leadership of the early Christian community in Rome, where he was eventually martyred.",
    patronOf: "Fishermen, popes, Rome, bridge builders",
  },

  {
    month: 6,
    day: 29,
    name: "Saint Paul the Apostle",
    image:
      "https://www.en.apostlesofil.com/wp-content/uploads/2019/10/fresco-St-Paul-the-Apostle-church-beginning.jpg",
    description:
      "Saint Paul, formerly known as Saul of Tarsus, was a fervent persecutor of Christians before his dramatic conversion on the road to Damascus. After his conversion, he became one of the most influential missionaries of the early Church, writing numerous epistles in the New Testament and spreading the Gospel throughout the Roman Empire. He was eventually martyred in Rome.",
    patronOf: "Missionaries, theologians, evangelists, writers",
  },
  {
    month: 6,
    day: 30,
    name: "The First Martyrs of the Holy Roman Church",
    image:
      "https://www.prayersandpetitions.org/wp-content/uploads/2022/06/FB_IMG_1656578946275.jpg",
    description:
      "The First Martyrs of the Holy Roman Church, also known as the Protomartyrs of the Roman Church, are the unnamed Christians who were martyred in Rome during the persecution of Emperor Nero following the Great Fire of Rome in A.D. 64. Falsely accused of causing the fire, they endured cruel deaths by crucifixion, burning, and being thrown to wild beasts. Their witness strengthened the early Church and stands as a lasting testimony to unwavering faith in Christ.",
    patronOf:
      "Persecuted Christians, Christian martyrs, witnesses to the faith",
  },

  {
    month: 7,
    day: 1,
    name: "Saint Oliver Plunkett",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d0/Oliver_Plunket_by_Edward_Luttrell.jpg",
    description:
      "Saint Oliver Plunkett was the Archbishop of Armagh and Primate of All Ireland during a time of intense persecution of Catholics in the 17th century. Despite great hardship, he worked tirelessly to reform the Church, establish schools, and strengthen the faith of his people. Falsely accused of treason, he was executed at Tyburn in 1681, becoming the last Catholic martyr to die in England. He was canonized by Pope Paul VI in 1975.",
    patronOf: "Peace and reconciliation in Ireland, the Archdiocese of Armagh",
  },
  {
    month: 7,
    day: 1,
    name: "Saint Junípero Serra",
    image:
      "https://www.padreserra.org/uploads/1/0/7/2/107289629/blessed-junipero-serra-zeal_orig.jpg",
    description:
      "Saint Junípero Serra was a Spanish Franciscan missionary who brought the Gospel to what is now California during the 18th century. He founded nine of the twenty-one Spanish missions that became centers of evangelization, education, and agriculture. Despite enduring illness and hardship, he traveled thousands of miles to serve Native peoples and spread the Christian faith. He was canonized by Pope Francis in 2015.",
    patronOf:
      "Vocations to Church ministry, Hispanic Americans, California missions",
  },
  {
    month: 7,
    day: 1,
    name: "Saint Nicasius of Jerusalem",
    image: "https://smom-za.org/images/img-Saint-Nicasius-of-Jerusalem.jpg",
    description:
      "Saint Nicasius of Jerusalem is venerated as an early bishop associated with the Christian community of Jerusalem. Tradition holds that he lived during the early centuries of the Church and suffered for his faith during periods of persecution. Though historical details are limited, he is remembered as part of the foundational witness of the early Church in the Holy Land.",
    patronOf: "Jerusalem, early Christian bishops, perseverance in persecution",
  },
  {
    month: 7,
    day: 1,
    name: "Saint Huailu Zhang",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjOq-iRftVVmn0J7wfCIWK7hPN_4mvRyNgi7brZEiyDoiT3Lt1w-qngPM&s=10",
    description:
      "Saint Huailu Zhang is venerated among the Chinese martyrs who gave their lives during periods of anti-Christian persecution in China. As a lay Christian, he remained steadfast in his faith despite threats and pressure to renounce Christianity. He is honored as part of the broader group of martyrs whose witness strengthened the growth of the Church in China.",
    patronOf:
      "Chinese Catholics, lay martyrs, steadfast faith under persecution",
  },
  {
    month: 7,
    day: 1,
    name: "Saint Fleuret of Estaing",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIUhjLLYLqgwNUG63s7T4K2EKEn3waLmy3Bbjfauao-G9k5ZaYp0i3KMQ8&s=10",
    description:
      "Saint Fleuret of Estaing is a local saint venerated in the region of Estaing in France. Tradition describes him as a holy priest or confessor known for his pastoral care, humility, and devotion to the poor. His memory is preserved through local devotion and the continued veneration of his legacy in the region.",
    patronOf: "Estaing, local clergy, rural communities",
  },
  {
    month: 7,
    day: 2,
    name: "Saint Bernardino Realino",
    image: "https://www.catholic.org/files/images/saints/391.jpg",
    description:
      "Saint Bernardino Realino was a Jesuit priest and lawyer from Italy who dedicated his life to pastoral care, preaching, and the administration of the sacraments. After leaving a promising legal career, he entered the Society of Jesus and became renowned for his wisdom, humility, and tireless work as a confessor and spiritual director, especially in Lecce, where he spent much of his ministry. He died in 1616 and was later canonized for his holiness and service.",
    patronOf: "Lecce, lawyers, confessors, Jesuit education",
  },
  {
    month: 7,
    day: 2,
    name: "Saint Swithun",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/34/St_Swithun%2C_Benedictional_of_%C3%86thelwold%2C_London%2C_BL%2C_Ms_Add._19598%2C_Fol_90V.jpg",
    description:
      "Saint Swithun (also spelled Swithin) was a 9th-century Bishop of Winchester in England, known for his humility, charity, and devotion to the poor. He requested to be buried outside so that rain might fall on his grave, symbolizing his connection with nature and divine providence. Later traditions associated his feast day with weather patterns, giving rise to the famous 'St. Swithun’s Day' folklore about rain lasting forty days.",
    patronOf: "Winchester, weather, rain, bridges",
  },
  {
    month: 7,
    day: 2,
    name: "Saint Lidanus of Sezze",
    image:
      "https://anastpaul.com/wp-content/uploads/2018/01/st-charles-of-sezze-my-snip.jpg",
    description:
      "Saint Lidanus of Sezze (also known as Saint Lidano) was an Italian Benedictine monk known for his deep humility, ascetic life, and devotion to prayer. Tradition holds that he performed acts of charity and was gifted with spiritual insight, serving as a model of monastic discipline and holiness in the region of Sezze. He is venerated locally as a patron and example of faithful monastic life.",
    patronOf: "Sezze, Benedictine monks, monastic life",
  },
  {
    month: 7,
    day: 2,
    name: "Saint Monegundis",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgoG0SE_sAgHq2E_6QJuHiAj1mWB8ytZikPLXcJPCCtXs72dE5hfmBTqX4t_xeXDKeZR4wljzg5L9Y2dGEg5LtdmhJJrxetG5qJSD-w-TczN-n0U5sRmoHpSUKb_-r2XJtmEWFulpa2Bbk/s1600/monegunda.jpg",
    description:
      "Saint Monegundis was a 6th-century French holy woman who lived a life of solitude and prayer after the death of her children. She eventually became a hermit near Tours, devoting herself to fasting, contemplation, and charity. Her reputation for holiness attracted others who sought her guidance, and she is remembered as an early example of female monastic spirituality in Gaul.",
    patronOf: "Widows, hermits, those seeking repentance",
  },
  {
    month: 7,
    day: 2,
    name: "Saint Martinian of Rome",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Martyrdom_of_St_Processo_and_St_Martiniano%2C_by_Valentin_de_Boulogne.jpg",
    description:
      "Saint Martinian of Rome was a Roman soldier who, according to tradition, was converted to Christianity and martyred during the persecutions of the early Church. He is often commemorated alongside Saint Processus, with whom he shared imprisonment and execution after refusing to renounce the Christian faith.",
    patronOf: "Soldiers, converts, Roman martyrs",
  },
  {
    month: 7,
    day: 2,
    name: "Saint Processus of Rome",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Martyrdom_of_St_Processo_and_St_Martiniano%2C_by_Valentin_de_Boulogne.jpg/960px-Martyrdom_of_St_Processo_and_St_Martiniano%2C_by_Valentin_de_Boulogne.jpg",
    description:
      "Saint Processus of Rome was a Christian martyr who, along with Saint Martinian, was imprisoned for his faith and executed during the early persecutions of Christians in Rome. Tradition holds that both saints were guards of Saints Peter and Paul while they were imprisoned and were later converted through their witness.",
    patronOf: "Roman soldiers, jailers, converts",
  },
  {
    month: 7,
    day: 2,
    name: "Martyrs of Seoul",
    image:
      "https://www.oursundayvisitor.com/wp-content/uploads/2024/09/20210902T0930-KOREA-MARTYRS-REMAINS-1507484.jpg",
    description:
      "The Martyrs of Seoul refer to the many Korean Christians who suffered persecution and death for their faith during the 18th and 19th centuries. In a time when Christianity was suppressed in Korea, thousands of believers—including laypeople, clergy, and missionaries—were arrested, tortured, and executed for refusing to abandon their faith. Their witness played a crucial role in the growth of the Catholic Church in Korea.",
    patronOf:
      "Korean Catholics, persecuted Christians, evangelization in Korea",
  },
];
