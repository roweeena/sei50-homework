class BallController < ApplicationController

    def answer
        @question = params[:question]
        output = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes definately.", "You may rely on it.", "As I see it, yes.", "Most likely", "Outlook good.", "Yes", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."]
        @output = output[rand(20)]
    end

end