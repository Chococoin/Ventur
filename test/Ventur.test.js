const Ventur = artifacts.require("Ventur")

require('chai')
  .use(require('chai-as-promised'))
  .should()

  contract("Ventur", (accounts) => {
    let VenturInstance
    beforeEach(async () => {
      VenturInstance = await Ventur.deployed()
    })

    describe('First round of test', async () => {
      it("Should assert if admin has right total supply.", async () => {
        const balanceOfAdmin = await VenturInstance.balanceOf('0x5c22DE4456535D1948cB64d952896f080D140651')
        assert.equal(balanceOfAdmin, 250000000000000000000000000, "Owner is Treasury Box.")
      })

      // it("Should assert if transfer pay proprely fee.", async () => {
      //   const balanceOfCollective0 = await VenturInstance.balanceOf('0xb3DF7E479424a15E6720C79Cb6BC62934Dc5917c')
      //   await VenturInstance.transfer('0x148536B0C60DD62f3B68F788cfe75c3c31F07906', '1000000000000000000', { from: '0x5c22DE4456535D1948cB64d952896f080D140651'} )
      //   const balanceOfCollective1 = await VenturInstance.balanceOf('0xb3DF7E479424a15E6720C79Cb6BC62934Dc5917c')
      //   assert.equal(balanceOfCollective1, '1000000000000000', "Owner is Treasury Box.")
      // })
    })

  })
