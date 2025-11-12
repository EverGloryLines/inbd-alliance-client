import { Ship, TrendingUp } from "lucide-react";

export function CommonalitiesAndDifferenceSection() {
  return (
    <div className="bg-transparent px-0">
      <div className="w-full">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="flex-1">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {/* Commonalities Card */}
              <div className="rounded-none bg-gray-200 p-6 md:p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <Ship className="w-8 h-8 text-gray-700" strokeWidth={1.5} />
                  <h2 className="text-lg md:text-xl font-semibold text-gray-900 uppercase tracking-wide">
                    Commonalities
                  </h2>
                </div>

                <div className="space-y-6 text-gray-800">
                  <p className="text-sm md:text-base leading-relaxed">
                    The difference between Everglory Lines and the other
                    Shipping Lines, in terms of carrying goods from places to
                    places, is &quot;absolutely nothing&quot;, nothing
                    whatsoever.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    We are in the same business as any other shipping lines,
                    operating international shipping, container liner and
                    multimodal transport-logistic services, in the same manner,
                    using the same means, the same methods and the same
                    hardware-equipment as any other shipping lines which are
                    operating shipping services in the Bay of Bengal region and
                    beyond.
                  </p>
                </div>
              </div>

              {/* Differences Card */}
              <div className="rounded-none bg-emerald-100 p-6 md:p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp
                    className="w-8 h-8 text-gray-700"
                    strokeWidth={1.5}
                  />
                  <h2 className="text-lg md:text-xl font-semibold text-gray-900 uppercase tracking-wide">
                    Differences
                  </h2>
                </div>

                <ul className="space-y-4 text-gray-800">
                  <li className="flex gap-3 text-sm md:text-base leading-relaxed">
                    <span className="text-gray-900 font-bold mt-1">•</span>
                    <span>Diverse, distinct & defined objectives.</span>
                  </li>
                  <li className="flex gap-3 text-sm md:text-base leading-relaxed">
                    <span className="text-gray-900 font-bold mt-1">•</span>
                    <span>
                      Playing a key role in the development of the economy of
                      the country.
                    </span>
                  </li>
                  <li className="flex gap-3 text-sm md:text-base leading-relaxed">
                    <span className="text-gray-900 font-bold mt-1">•</span>
                    <span>
                      Different ways and means in meeting stated objectives.
                    </span>
                  </li>
                  <li className="flex gap-3 text-sm md:text-base leading-relaxed">
                    <span className="text-gray-900 font-bold mt-1">•</span>
                    <span>Our ideology is different and purpose-based.</span>
                  </li>
                  <li className="flex gap-3 text-sm md:text-base leading-relaxed">
                    <span className="text-gray-900 font-bold mt-1">•</span>
                    <span>
                      We all need to live in our land with ideological
                      differences.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
