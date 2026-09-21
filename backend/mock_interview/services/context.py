def build_candidate_context(user):

    context = {
        "name": user.name,
        "target_role": user.target_role,
        "experience_level": user.experience_level,
        "target_companies": user.target_companies,
        "preferred_location": user.preferred_location,
        "preferred_job_type": user.preferred_job_type,
    }

    return context