class PreOrder
{
verifymypreorder()
{

  cy.get('.menu-item-33058 > a > .menu-label-level-0').click()
  cy.get('.post-683863 > .product_item_wrapper > .product-meta-wrapper > .list_add_to_cart_wrapper > .list_add_to_cart > .button').click()
  cy.get('.buy-more > span').click()
  cy.get('.checkout-button').click()


}


}
export default PreOrder