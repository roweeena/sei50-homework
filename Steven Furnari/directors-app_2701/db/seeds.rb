Director.destroy_all

spielberg = Director.create!(
    name: 'Steven Spielberg',
    dob: '1946/12/18',
    nationality: 'American',
    bio: 'Steven Allan Spielberg is an American film director, producer, and screenwriter. He began his career in the New Hollywood era and is currently the most commercially successful director. Spielberg is the recipient of various accolades, including three Academy Awards (with two for Best Director), a Kennedy Center honor, a Cecil B. DeMille Award, and an AFI Life Achievement Award.',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Steven_Spielberg_by_Gage_Skidmore.jpg'
)

tarantino = Director.create!(
    name: 'Quentin Tarantino',
    dob: '1963/03/27',
    nationality: 'American',
    bio: 'Quentin Jerome Tarantino is an American filmmaker, film director, screenwriter, producer, film critic, and actor. His films are characterized by nonlinear storylines, dark humor, stylized violence, foot fetishism, extended dialogue, ensemble casts, references to popular culture, alternate history, and neo-noir.',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Quentin_Tarantino_by_Gage_Skidmore.jpg'
)

ritchie = Director.create!(
    name: 'Guy Ritchie',
    dob: '1968/09/10',
    nationality: 'English',
    bio: 'Guy Stuart Ritchie is an English film director, producer, screenwriter and businessman. His work includes British gangster films, and the Sherlock Holmes films starring Robert Downey Jr.',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/1/14/GuyRitchiebyKathyHutchins.jpg'
)

puts "Done! Created #{Director.count} directors:"
puts Director.pluck(:name).join(', ')

Movie.destroy_all

Movie.create!(
    title: 'Lock, Stock and Two Smoking Barrels',
    director_id: ritchie.id,
    released: 1998,
    boxoffice: '$28.1 million',
    description: 'Lock, Stock and Two Smoking Barrels is a 1998 crime comedy film written and directed by Guy Ritchie, produced by Matthew Vaughn and starring an ensemble cast featuring Jason Flemyng, Dexter Fletcher, Nick Moran, Steven Mackintosh, Sting with Vinnie Jones and Jason Statham in their feature film debuts.
    The story is a heist involving a self-confident young card sharp who loses £500,000 to a powerful crime lord in a rigged game of three-card brag. To pay off his debts, he and his friends decide to rob a small-time gang who happen to be operating out of the flat next door.',
    image: 'https://flxt.tmsimg.com/assets/p22639_p_v10_ab.jpg'
)

Movie.create!(
    title: 'Jaws',
    director_id: spielberg.id,
    released: 1975,
    boxoffice: '$472 million',
    description: 'Jaws is a 1975 American thriller film directed by Steven Spielberg, based on the 1974 novel by Peter Benchley. In the film, a man-eating great white shark attacks beachgoers at a summer resort town, prompting police chief Martin Brody (Roy Scheider) to hunt it with the help of a marine biologist (Richard Dreyfuss) and a professional shark hunter (Robert Shaw). Murray Hamilton plays the mayor, and Lorraine Gary portrays Brodys wife. The screenplay is credited to Benchley, who wrote the first drafts, and actor-writer Carl Gottlieb, who rewrote the script during principal photography.',
    image: 'https://static.tvtropes.org/pmwiki/pub/images/jaws_movie_poster.png'
)

Movie.create!(
    title: 'Inglourious Basterds',
    director_id: tarantino.id,
    released: 2009,
    boxoffice: '$321.5 million',
    description: "Inglourious Basterds is a 2009 war film written and directed by Quentin Tarantino and starring Brad Pitt, Christoph Waltz, Michael Fassbender, Eli Roth, Diane Kruger, Daniel Brühl, Til Schweiger and Mélanie Laurent. The film tells an alternate history story of two plots to assassinate Nazi Germany's leadership, one planned by Shosanna Dreyfus (Laurent), a young French Jewish cinema proprietor, and the other by the British but ultimately conducted solely by a team of Jewish American soldiers led by First Lieutenant Aldo Raine (Pitt). Christoph Waltz co-stars as Hans Landa, an SS colonel in charge of tracking down Raine's group. The title was inspired by Italian director Enzo G. Castellari's macaroni combat film The Inglorious Bastards (1978), though Tarantino's film is not a remake of it.",
    image: 'https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg'
)
