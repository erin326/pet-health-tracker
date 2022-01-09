class EventSerializer < ActiveModel::Serializer
  attributes :id, :text, :start, :end
end
