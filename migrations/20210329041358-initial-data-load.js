'use strict'

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('songs', [
      // The Celts
      { name: 'The Celts', albumId: 1 },
      { name: 'Aldebaren', albumId: 1 },
      { name: 'I Want Tomorrow', albumId: 1 },
      { name: 'March of the Celts', albumId: 1 },
      { name: 'Deireadh an Tuath', albumId: 1 },
      { name: 'The Sun in the Stream', albumId: 1 },
      { name: 'To Go Beyond (I)', albumId: 1 },
      { name: 'Fairy Tale', albumId: 1 },
      { name: 'Epona', albumId: 1 },
      { name: 'Triad: St. Patrick/Cú Chulainn / Oisin', albumId: 1 },
      { name: 'Portrait(Out of the Blue)', albumId: 1 },
      { name: 'Boadicea', albumId: 1 },
      { name: 'Bard Dance', albumId: 1 },
      { name: 'Dan y Dŵr', albumId: 1 },
      { name: 'To Go Beyond (II)', albumId: 1 },
      // Watermark
      { name: 'Watermark', albumId: 2 },
      { name: 'Cursum Perficio', albumId: 2 },
      { name: 'On Your Shore', albumId: 2 },
      { name: 'Storms In Africa', albumId: 2 },
      { name: 'Exile', albumId: 2 },
      { name: 'Miss Clare Remembers', albumId: 2 },
      { name: 'Orinoco Flow', albumId: 2 },
      { name: 'Evening Falls', albumId: 2 },
      { name: 'River', albumId: 2 },
      { name: 'The Long Ships', albumId: 2 },
      { name: 'Na Laetha Geal M\'Oige', albumId: 2 },
      { name: 'Storms in Africa (Part II)', albumId: 2 },
      // Shepard Moon
      { name: 'Shepard Moons', albumId: 3 },
      { name: 'Carribean Blue', albumId: 3 },
      { name: 'How Can I Keep From Singing', albumId: 3 },
      { name: 'Ebudae', albumId: 3 },
      { name: 'Angeles', albumId: 3 },
      { name: 'No Holly for Miss Quinn', albumId: 3 },
      { name: 'Book of Days', albumId: 3 },
      { name: 'Evacuee', albumId: 3 },
      { name: 'Lothlórien', albumId: 3 },
      { name: 'Marble Halls', albumId: 3 },
      { name: 'Afer Ventus', albumId: 3 },
      { name: 'Smaointe...', albumId: 3 },
      // The Memory of Trees
      { name: 'The Memory of Trees', albumId: 4 },
      { name: 'Anywhere Is', albumId: 4 },
      { name: 'Pax Deorum', albumId: 4 },
      { name: 'Athair Ar Neamh', albumId: 4 },
      { name: 'From Where I Am', albumId: 4 },
      { name: 'China Roses', albumId: 4 },
      { name: 'Hope Has a Place', albumId: 4 },
      { name: 'Tea-House Moon', albumId: 4 },
      { name: 'Once You Had Gold', albumId: 4 },
      { name: 'La Soñadora', albumId: 4 },
      { name: 'On My Way Home', albumId: 4 },
      // A Day Without Rain
      { name: 'A Day Without Rain', albumId: 5 },
      { name: 'Wild Child', albumId: 5 },
      { name: 'Only Time', albumId: 5 },
      { name: 'Tempus Vernum', albumId: 5 },
      { name: 'Deora Ar Mo Chroí', albumId: 5 },
      { name: 'Flora\'s Secret', albumId: 5 },
      { name: 'Fallen Embers', albumId: 5 },
      { name: 'Silver Inches', albumId: 5 },
      { name: 'Pilgrim', albumId: 5 },
      { name: 'One by One', albumId: 5 },
      { name: 'The First Autumn', albumId: 5 },
      { name: 'Lazy Days', albumId: 5 },
      // Amarantine
      { name: 'Less Than a Pearl', albumId: 6 },
      { name: 'Amarantine', albumId: 6 },
      { name: 'It\'s in the Rain', albumId: 6 },
      { name: 'If I Could Be Where You Are', albumId: 6 },
      { name: 'The River Sings', albumId: 6 },
      { name: 'Long Long Journey', albumId: 6 },
      { name: 'Sumiregusa', albumId: 6 },
      { name: 'Someone Said Goodbye', albumId: 6 },
      { name: 'A Moment Lost', albumId: 6 },
      { name: 'Drifting', albumId: 6 },
      { name: 'Amid the Falling Snow', albumId: 6 },
      { name: 'Water Shows the Hidden Heart', albumId: 6 },
      // And Winter Came
      { name: 'And Winter Came', albumId: 7 },
      { name: 'Journey of the Angels', albumId: 7 },
      { name: 'White Is in the Winter Night', albumId: 7 },
      { name: 'O Come, O Come, Emmanuel', albumId: 7 },
      { name: 'Trains and Winter Rains', albumId: 7 },
      { name: 'Dreams Are More Precious', albumId: 7 },
      { name: 'Last Time by Moonlight', albumId: 7 },
      { name: 'One Toy Soldier', albumId: 7 },
      { name: 'Stars and Midnight Blue', albumId: 7 },
      { name: 'The Spirit of Christmas Past', albumId: 7 },
      { name: 'My! My! Times Flies!', albumId: 7 },
      { name: 'Oíche Chiúin (Chorale)', albumId: 7 },
      // Dark Sky Island
      { name: 'The Humming', albumId: 8 },
      { name: 'So I Could Find My Way', albumId: 8 },
      { name: 'Even in the Shadows', albumId: 8 },
      { name: 'The Forge of the Angels', albumId: 8 },
      { name: 'Echoes in Rain', albumId: 8 },
      { name: 'I Could Never Say Goodbye', albumId: 8 },
      { name: 'Dark Sky Island', albumId: 8 },
      { name: 'Sancta Maria', albumId: 8 },
      { name: 'Astra et Luna', albumId: 8 },
      { name: 'The Loxian Gate', albumId: 8 },
      { name: 'Diamonds on the Water', albumId: 8 },
      { name: 'Solace', albumId: 8 },
      { name: 'Pale Grass Blue', albumId: 8 },
      { name: 'Remember Your Smile', albumId: 8 },

    ])
    await queryInterface.bulkInsert('details', [
      {
        name: 'Enya',
        dob: 'May 17, 1961',
        // eslint-disable-next-line max-len
        genres: 'celtic, pop, world new-age',
        bornIn: 'Gweedore, County Donegal, Ulster, Ireland'
      }

    ])

    return queryInterface.bulkInsert('albums', [

      { name: 'The Celts', year: 1987 }, // 1
      { name: 'Watermark', year: 1988 }, // 2
      { name: 'Shepards Moons', year: 1991 }, // 3
      { name: 'The Memory of Trees', year: 1995 }, // 4
      { name: 'A Day Without Rain', year: 2000 }, // 5
      { name: 'Amarantine', year: 2005 }, // 6
      { name: 'And Winter Came', year: 2008 }, // 7
      { name: 'Dark Sky Island', year: 2015 }, // 8

    ])
  },



  down: async (queryInterface) => {
    await queryInterface.bulkDelete('songs')
    await queryInterface.bulkDelete('details')

    return queryInterface.bulkDelete9('albums')
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
}
