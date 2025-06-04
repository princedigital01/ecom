import { Filtering, Grid, ViewList } from "@/assets/icons";
import Products from "@/components/Products";

export default function Shop() {

    return (
      <div className="products">
        <div className="text-sm lg:text-lg p-5 lg:pr-16 w-[100vw] h-[12vh] bg-c-secondary flex flex-row text-center justify-between ">
          <div className="flex flex-row gap-3">
            <div className="border-r-2 pr-6 border-c-title h-[50%] flex flex-row gap-1 lg:gap-4">
              <Filtering/><span className="hidden lg:flex">filter</span>
              <Grid/>
              <ViewList/>
            </div>
            <div className="flex"><span className="lg:flex hidden">showing&nbsp;</span> 1-16 of 32 <span className="lg:flex hidden">&nbsp;results</span></div>
          </div>
          <div className="flex flex-row gap-5">
            <div className="flex gap-3 items-center">
              show
              <input className="w-10 h-10 text-center" type="number"  placeholder="5"/>
            </div>
            <div className="flex gap-3 items-center">
              sort by
              <input type="text" className="h-10 min-w-10 w-[70%] max-w-28 p-4 " placeholder="type"/>
            </div>
          </div>
        </div>
        <Products limit={false} extend/>
      </div>
    );
  }
  