"use client";

import { useEffect } from "react";
import { initSiteScripts } from "@/js/main";

export default function SiteScripts() {
    useEffect(() => {
        initSiteScripts();
    }, []);

    return null;
}
