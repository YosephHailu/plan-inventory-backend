<?php

namespace App\GraphQL\Mutations;

use App\Models\Configuration;

final class ConfigurationMutation
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __invoke($_, array $args)
    {
        // TODO implement the resolver
    }

    public function store($rootValue, array $args)
    {
        $data = collect($args)->only(['company_name', 'company_address', 'company_logo_url']);

        $config = Configuration::create($data->toArray());

        return $config;
    }

    public function update($rootValue, array $args)
    {
        $data = collect($args)->only(['company_name', 'company_address', 'company_logo_url']);

        $config = Configuration::find($args['id']);
        $config->update($data->toArray());

        return $config;
    }
}
