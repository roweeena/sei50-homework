class Magic8ballController < ApplicationController
    def home

    end

    def replyback
        @answers = [
            'It is certain.',
            'it is decidedly so.',
            'Without a doubt.',
            'Yes definitely.',
            'You may rely on it.',
            'As I see it, yes.',
            'Most likely.',
            'Outlook good',
            'Yes.',
            'Sings point yes.',
            'Reply hazy, try again.',
            'Ask again later.',
            'Better not tell you now.',
            'Cannot predit now.',
            'Concentrate and ask again.',
            "Don't count on it.",
            'My reply is no.',
            'Outlook not so good.',
            'Very doubtful.'
        ]
    end



end # class Magic8ballController