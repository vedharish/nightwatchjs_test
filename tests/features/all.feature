Feature: Login Test
  Test Case 1

Scenario: Login Test
  Given I navigate to https://www.bstackdemo.com 
  And I login with demouser user and testingisfun99 password
  Then the url should contain ?signin=true
  Then I add iPhone 12 mini to cart
  Then the subtotal should be 699
  Then I checkout the cart
  Then I should see Your Order has been successfully placed.
