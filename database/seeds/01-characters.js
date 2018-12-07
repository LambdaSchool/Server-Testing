exports.seed = (knex, Promise) => {
  return knex('gameofthrones')
    .truncate()
    .then(() =>
      knex('gameofthrones').insert([
        { name: 'Daenerys Targaryen', house: 'Targaryen' },
        { name: 'Jon Snow', house: 'Stark' },
        { name: 'Sansa Stark', house: 'Stark' },
        { name: 'Arya Stark', house: 'Stark' },
        { name: 'Bran Stark', house: 'Stark' },
        { name: 'Cersi Lannister', house: 'Lannister' },
        { name: 'Tyrion Lannister', house: 'Lannister' },
        { name: 'Jaime Lannister', house: 'Lannister' },
        { name: 'Jorah Mormont', house: 'Mormont' },
        { name: 'Samwell Tarly', house: 'Tarly' }
      ])
    );
};
