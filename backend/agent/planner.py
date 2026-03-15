def plan_task(user_task: str):
    task = user_task.lower()

    # Basic keyword routing
    if "startup" in task or "company" in task:
        steps = [
            "search_web: AI productivity startups",
            "collect_top_results",
            "visit_company_websites",
            "locate_pricing_pages",
            "extract_pricing_information",
            "return_structured_startup_list"
        ]

    elif "pricing" in task:
        steps = [
            "search_web: product pricing",
            "open_official_pricing_pages",
            "extract_pricing_table",
            "normalize_price_data",
            "return_structured_output"
        ]

    elif "compare" in task:
        steps = [
            "search_web: related tools",
            "collect_tool_features",
            "collect_pricing_information",
            "compare_features_and_pricing",
            "return_comparison_table"
        ]

    else:
        steps = [
            "search_web: general information",
            "open_top_results",
            "extract_relevant_information",
            "summarize_findings"
        ]

    return {
        "task": user_task,
        "agent_plan": steps
    }