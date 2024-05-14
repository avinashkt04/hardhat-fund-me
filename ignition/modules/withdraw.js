async function main() {
    let deployer = await ethers.provider.getSigner()
    const fundMe = await ethers.getContractAt(
        "FundMe",
        (
            await deployments.get("FundMe")
        ).address,
        deployer
    )
    console.log("Funding...")
    const transactionResponse = await fundMe.withdraw()
    await transactionResponse.wait(1)
    console.log("Got it back!")
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
