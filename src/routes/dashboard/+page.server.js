import { AuthApiError } from "@supabase/supabase-js"
import { fail, redirect } from "@sveltejs/kit"
import { supabaseClient } from '$lib/supabase/config'

export const load = ({ locals }) => {
  if (!locals.session) {
    throw redirect(303, '/')
  }
}

export const actions = {
	create: async ({ request, locals }) => {
		const body = Object.fromEntries(await request.formData())

    await supabaseClient.from('products').insert([{
			title: body.title,
			price: body.price,
			description: body.description,
			category: body.category,
			image: body.image,
    }])

		throw redirect(303, "/products")
	},
}