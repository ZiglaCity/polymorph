import App from "../src/App"
import { screen } from "@testing-library/dom"
import {render} from "@testing-library/react"
import { describe, expect, it } from "vitest"

describe("Sample Test", async()=>{
    it("should render Hello, World!",async()=>{
        //arrange
        render(<App />)

        //act
        await screen.findByRole('heading')

        //assert
        expect(screen.queryByRole('heading'))
    })
})
