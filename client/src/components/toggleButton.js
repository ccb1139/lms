import { useState } from "react";

export default function Toggle({_enabled, onEnabled}) {
    var tgMsg = "Off"
    if (_enabled) { tgMsg = "On" }

    return (
        <div className="relative flex flex-col items-center justify-center overflow-hidden">
            <div>
                <p className= "text-sm font-medium text-gray-900">Teacher Mode</p>
            </div>
            <div className="flex">
                <label className="flex relative items-center mr-5 cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={_enabled}
                        readOnly
                    />
                    <div
                        onClick={() => {
                            onEnabled(!_enabled);
                        }}
                        className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                    ></div>
                    <span className="ml-2 text-sm font-medium text-gray-900">
                        {tgMsg}
                    </span>
                </label>
            </div>
        </div>
    );
}

