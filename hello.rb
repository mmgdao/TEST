require "csv" # CSVファイルを扱うためのライブラリを読み込んでいます

puts "1 → 新規でメモを作成する / 2 → 既存のメモを編集する"

memo_type = gets.to_i # ユーザーの入力値を取得し、数字へ変換しています

# if文を使用して続きを作成していきましょう。
# 「memo_type」の値（1 or 2）によって処理を分岐させていきましょう。
if memo_type == 1
    puts "拡張子を除いたファイル名を入力してください。"
    new_file = gets.chomp.to_s
    puts "メモしたい内容を入力してください。"
    puts "完了したら改行して「Ctrl+D」を入力してください。"
    CSV.open("#{new_file}.csv","w") do |memo_contents|
        new_memo_contents = readlines
        memo_contents << new_memo_contents
    end
elsif memo_type == 2
    puts "編集したいファイル名を拡張子を除いて入力してください。"
    puts "ファイル名が見つからない場合は新規でファイルを作成します。"
    edit_file_name = gets.chomp.to_s
    puts "追記したい内容を入力してください。"
    puts "完了したら改行して「Ctrl+D」を入力してください。"
    CSV.open("#{edit_file_name}.csv","a") do |edit_contents|
        edit_memo_contents = readlines
        edit_contents << edit_memo_contents
    end
end

