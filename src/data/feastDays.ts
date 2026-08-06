export interface FeastDay {
  month: number;
  day: number;
  name: string;
}

const nonMovingFeastDays: FeastDay[] = [
  {
    month: 1,
    day: 1,
    name: "Solemnity of Mary, Holy Mother of God",
  },
  {
    month: 1,
    day: 6,
    name: "Solemnity of the Epiphany of the Lord",
  },
  {
    month: 1,
    day: 25,
    name: "Feast of the Conversion of St. Paul the Apostle",
  },
  {
    month: 2,
    day: 2,
    name: "Feast of the Presentation of the Lord",
  },
  {
    month: 2,
    day: 11,
    name: "Memorial of Our Lady of Lourdes",
  },
  {
    month: 2,
    day: 22,
    name: "Feast of the Chair of St. Peter the Apostle",
  },
  {
    month: 3,
    day: 19,
    name: "Solemnity of St. Joseph, Spouse of the Blessed Virgin Mary",
  },
  {
    month: 3,
    day: 25,
    name: "Solemnity of the Annunciation of the Lord",
  },
  {
    month: 5,
    day: 13,
    name: "Memorial of Our Lady of Fatima",
  },
  {
    month: 5,
    day: 31,
    name: "Feast of the Visitation of the Blessed Virgin Mary",
  },
  {
    month: 6,
    day: 24,
    name: "Solemnity of the Nativity of St. John the Baptist",
  },
  {
    month: 6,
    day: 27,
    name: "Memorial of Our Lady of Perpetual Help",
  },
  {
    month: 6,
    day: 29,
    name: "Solemnity of Sts. Peter and Paul, Apostles",
  },
  {
    month: 7,
    day: 16,
    name: "Memorial of Our Lady of Mount Carmel",
  },
  {
    month: 8,
    day: 6,
    name: "Feast of the Transfiguration of the Lord",
  },

  {
    month: 8,
    day: 16,
    name: "Solemnity of the Assumption of the Blessed Virgin Mary",
  },
  {
    month: 8,
    day: 22,
    name: "Memorial of the Queenship of the Blessed Virgin Mary",
  },
  {
    month: 8,
    day: 29,
    name: "Memorial of the Passion of St. John the Baptist",
  },
  {
    month: 9,
    day: 8,
    name: "Feast of the Nativity of the Blessed Virgin Mary",
  },
  {
    month: 9,
    day: 14,
    name: "Feast of the Exaltation of the Holy Cross",
  },
  {
    month: 9,
    day: 15,
    name: "Memorial of Our Lady of Sorrows",
  },
  {
    month: 9,
    day: 24,
    name: "Memorial of Our Lady of Walsingham",
  },
  {
    month: 10,
    day: 2,
    name: "Memorial of the Holy Guardian Angels",
  },
  {
    month: 10,
    day: 7,
    name: "Memorial of Our Lady of the Rosary",
  },
  {
    month: 11,
    day: 1,
    name: "Solemnity of All Saints",
  },
  {
    month: 11,
    day: 2,
    name: "The Commemoration of all the Faithful Departed",
  },
  {
    month: 11,
    day: 9,
    name: "The Dedication of the Lateran Basilica",
  },
  {
    month: 11,
    day: 18,
    name: "The Dedication of the Basilicas of Saint Peter and Saint Paul in Rome",
  },
  {
    month: 11,
    day: 21,
    name: "The Presentation of the Blessed Virgin Mary",
  },
  {
    month: 12,
    day: 8,
    name: "Solemnity of the Immaculate Conception of the Blessed Virgin Mary",
  },
  {
    month: 12,
    day: 10,
    name: "Memorial of Our Lady of Loreto",
  },
  {
    month: 12,
    day: 12,
    name: "Memorial of Our Lady of Guadalupe",
  },
  {
    month: 12,
    day: 25,
    name: "Solemnity of the Nativity of Our Lord or Christmas",
  },
];

const movingFeastDays: FeastDay[] = [
  {
    month: 1,
    day: 11,
    name: "Feast of the Baptism of the Lord",
  },
  {
    month: 2,
    day: 17,
    name: "Shrove Tuesday",
  },
  {
    month: 2,
    day: 18,
    name: "Ash Wednesday",
  },
  {
    month: 3,
    day: 29,
    name: "Palm Sunday of the Passion of the Lord",
  },
  {
    month: 4,
    day: 2,
    name: "Holy Thursday of the Lord's Supper",
  },
  {
    month: 4,
    day: 3,
    name: "Good Friday",
  },
  {
    month: 4,
    day: 4,
    name: "Holy Saturday",
  },
  {
    month: 4,
    day: 5,
    name: "Easter Sunday",
  },
  {
    month: 4,
    day: 12,
    name: "Feast of Divine Mercy",
  },
  {
    month: 5,
    day: 17,
    name: "Solemnity of the Ascension of the Lord",
  },
  {
    month: 5,
    day: 24,
    name: "Pentecost",
  },
  {
    month: 5,
    day: 25,
    name: "Memorial of The Blessed Virgin Mary, Mother of the Church",
  },
  {
    month: 5,
    day: 28,
    name: "The Feast of Lord Jesus Christ, the Eternal High Priest",
  },
  {
    month: 5,
    day: 31,
    name: "Solemnity of the Most Holy Trinity",
  },
  {
    month: 6,
    day: 4,
    name: "Solemnity of the Most Holy Body and Blood of Christ",
  },
  {
    month: 6,
    day: 12,
    name: "Solemnity of the Most Sacred Heart of Jesus",
  },
  {
    month: 6,
    day: 13,
    name: "Memorial of the Immaculate Heart of the Blessed Virgin Mary",
  },

  {
    month: 11,
    day: 22,
    name: "Our Lord Jesus Christ, King of the Universe",
  },
  {
    month: 12,
    day: 27,
    name: "Feast of the Holy Family of Jesus, Mary and Joseph",
  },
];

export const feastDays: FeastDay[] = [
  /* JANUARY */
  /* FEBRUARY */
  /* MARCH */
  /* APRIL */
  /* MAY */
  /* JUNE */
  /* JULY */
  /* AUGUST */
  /* SEPTEMBER */
  /* OCTOBER */
  /* NOVEMBER */
  /* DECEMBER */
];
