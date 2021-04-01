
import * as GameTest from "GameTest";
import { Blocks, BlockLocation } from "Minecraft";
        
function basicTest(test) {
    let zoglinEntityType = "zoglin";
    let skeletonEntityType = "skeleton";
        
    test.spawn(zoglinEntityType, new BlockLocation(2, 2, 3));
    test.spawn(skeletonEntityType, new BlockLocation(5, 2, 3));
    
    test.succeedWhen( ()=> {
            test.assertEntityNotPresentInArea(skeletonEntityType);
        }
    );
}
        
GameTest.register("MyProject", "basicTest", basicTest).structureName("gametests:basic");     
