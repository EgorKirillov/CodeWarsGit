const getPINs = require("./The observed PIN")

test("test kyu 4 The observed PIN", () => {

    expect(getPINs('8')).toEqual(expect.arrayContaining(["5", "7", "8", "9", "0"]))
    expect(getPINs('11')).toEqual(expect.arrayContaining(["11", "22", "44", "12", "21", "14", "41", "24", "42"]))
    expect(getPINs('369')).toEqual(expect.arrayContaining(["339", "366", "399", "658", "636", "258", "268", "669", "668", "266", "369", "398", "256", "296", "259", "368", "638", "396", "238", "356", "659", "639", "666", "359", "336", "299", "338", "696", "269", "358", "656", "698", "699", "298", "236", "239"]))
    expect(getPINs('1357')).toEqual(expect.arrayContaining(['1224', '1227', '1228', '1244', '1247', '1248', '1254', '1257', '1258', '1264', '1267', '1268', '1284', '1287', '1288', '1324', '1327', '1328', '1344', '1347', '1348', '1354', '1357', '1358', '1364', '1367', '1368', '1384', '1387', '1388', '1624', '1627', '1628', '1644', '1647', '1648', '1654', '1657', '1658', '1664', '1667', '1668', '1684', '1687', '1688', '2224', '2227', '2228', '2244', '2247', '2248', '2254', '2257', '2258', '2264', '2267', '2268', '2284', '2287', '2288', '2324', '2327', '2328', '2344', '2347', '2348', '2354', '2357', '2358', '2364', '2367', '2368', '2384', '2387', '2388', '2624', '2627', '2628', '2644', '2647', '2648', '2654', '2657', '2658', '2664', '2667', '2668', '2684', '2687', '2688', '4224', '4227', '4228', '4244', '4247', '4248', '4254', '4257', '4258', '4264', "4267", "4268", "4284", "4287", "4288", "4324", "4327", "4328", "4344", "4347", "4348", "4354", "4357", "4358", "4364", "4367", "4368", "4384", "4387", "4388", "4624", "4627", "4628", "4644", "4647", "4648", "4657", "4658", "4664", "4667", "4668", "4684", "4687", "4688"]))
})



