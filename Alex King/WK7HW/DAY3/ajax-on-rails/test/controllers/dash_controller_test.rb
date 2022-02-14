require 'test_helper'

class DashControllerTest < ActionDispatch::IntegrationTest
  test "should get app" do
    get dash_app_url
    assert_response :success
  end

end
