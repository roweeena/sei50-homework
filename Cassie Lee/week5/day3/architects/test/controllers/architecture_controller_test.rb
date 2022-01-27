require 'test_helper'

class ArchitectureControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get architecture_new_url
    assert_response :success
  end

  test "should get create" do
    get architecture_create_url
    assert_response :success
  end

  test "should get index" do
    get architecture_index_url
    assert_response :success
  end

  test "should get show" do
    get architecture_show_url
    assert_response :success
  end

  test "should get edit" do
    get architecture_edit_url
    assert_response :success
  end

  test "should get update" do
    get architecture_update_url
    assert_response :success
  end

  test "should get destroy" do
    get architecture_destroy_url
    assert_response :success
  end

end
