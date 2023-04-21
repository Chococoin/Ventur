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
      it("Should assert msg.sender is _admin and treasuryBox", async () => {
        const owner = await TreasuryInstance.owner()
        const TreasuryBox = await TreasuryInstance.treasuryBox()
  
        assert.equal(owner, TreasuryBox, "Owner is Treasury Box.")
      })
    })

  })