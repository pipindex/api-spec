var seedData = require('seed_data');

module.exports = function (productSpecId) {
    var product = seedData.objectFromSpecId(productSpecId);
    var response =   {
        id: String(product._id),
        href: "/v1/product/" + product._id,
        _type: "product",
        name: product.name,
        slug: product.slug,
        short_slug: product.short_slug,
        course: {
            href: "/v1/course/" + product._course_id,
            id: String(product._course_id),
        },
        language: {
            href: "/v1/language/" + product._language_id,
            id: String(product._language_id),
        },
        ultimate: product.ultimate,
        quizzes: product.quizzes,
        resources: product.resources,
        payment_options: product.payment_options,
        stream_names: product.stream_names,
        linked_product: product._linked_product_id ? {
            href: "/v1/linked_product/" + product._linked_product_id,
            id: String(product._linked_product_id)
        } : null
    };

    return response;
};