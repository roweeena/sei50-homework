require 'test_helper'

class LeaguesControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get leagues_new_url
    assert_response :success
  end

  test "should get index" do
    get leagues_index_url
    assert_response :success
  end

  test "should get show" do
    get leagues_show_url
    assert_response :success
  end

  test "should get edit" do
    get leagues_edit_url
    assert_response :success
  end

end
