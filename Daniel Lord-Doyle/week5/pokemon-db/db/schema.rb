# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_01_27_211030) do

  create_table "owners", force: :cascade do |t|
    t.string "name"
    t.string "jap_name"
    t.integer "age"
    t.string "gender"
    t.string "eye_colour"
    t.string "hair_colour"
    t.string "hometown"
    t.string "region"
    t.string "specializes_in"
    t.string "anime_debut"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "pokemons", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "image_one"
    t.string "image_two"
    t.integer "pokedex_no"
    t.string "pokemon_type"
    t.integer "gender_ration"
    t.integer "catch_rate"
    t.float "height"
    t.float "weight"
    t.string "ability_one"
    t.string "ability_two"
    t.string "ability_three"
    t.string "ability_four"
    t.integer "owner_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
