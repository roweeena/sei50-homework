class RpsController < ApplicationController

  def result

    moves = ['rock', 'paper', 'scissors']
    @computer = moves[(rand 3)-1]
    @player = params[:throw]

    game = {
      'rock'=> {'scissors' => 'win', 'paper'=> 'loose', 'rock'=> 'draw'},
      'paper' =>{'rock' =>'win', 'scissors' =>'loose', 'paper'=> 'draw'},
      'scissors' =>{'paper'=> 'win', 'rock' =>'loose', 'scissors'=> 'draw'}
    }

    @message = game[@player][@computer]

  end

end