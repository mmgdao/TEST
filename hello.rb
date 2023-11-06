def janken 
    start_signal = "ジャンケン…"
    end_signal = "ホイ！"
    puts "#{start_signal}"
    jankens = ["グー", "チョキ", "パー"]
    program_select = rand(3)
    puts "0(グー)1(チョキ)2(パー)3(戦わない)"
    player_select = gets.to_i
  
  
  if player_select > 3
      puts "入力された値が無効です"
      return true
  elsif player_select == 3
    puts "戦わない"
    return false
  elsif player_select ==  program_select
    start_signal = "あいこで…"
    end_signal = "ショ！"
  end
  
  puts "#{end_signal}"
  puts "____________________"
  puts "あなた: #{jankens[player_select]}を出しました"
  puts "相手: #{jankens[program_select]}を出しました"
  puts "____________________"
  if player_select ==  program_select
    return true
  elsif (player_select == 0 && program_select ==1) || (player_select == 1 && program_select ==2) || (player_select == 2 && program_select ==0)
      puts "あなたの勝ちです" 
      @result_janken = "win"
    return attimuite_hoi
  else
      puts "負け"
      @result_janken = "lose"
      return attimuite_hoi
  end
  end 
  
  
  
  def attimuite_hoi
    directions = ["上","下","左","右"]
    program_direction = rand(4)
    puts "あっち向いて〜"
    puts "0(上)1(下)2(左)3(右)"
    player_direction = gets.to_i
    
    if player_direction > 3
    puts "入力された値が無効です"
    return true
    end
    
    puts "ホイ！"
    puts "____________________"
    puts "あなた: #{directions[player_direction]}です"
  puts "相手: #{directions[program_direction]}です"
  puts "____________________"
  
  if player_direction == program_direction && @result_janken == "win"
  puts "あなたの勝ちです"
  return false
  elsif player_direction == program_direction && @result_janken == "lose"
  puts "あなたの負けです"
  return false
  else
  return true
  end
  end
  
  next_game = true
  
  while next_game 
   next_game = janken
  end
